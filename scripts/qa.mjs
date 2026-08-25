import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const { chromium } = require('playwright')

const baseUrl = 'http://127.0.0.1:5173'
const reviewDir = new URL('../.impeccable/review/', import.meta.url)
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
})
const errors = []

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 })
  page.setDefaultTimeout(5000)
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`)
  })
  page.on('pageerror', (error) => errors.push(`page: ${error.message}`))

  await page.goto(baseUrl, { waitUntil: 'networkidle' })
  console.log('step: desktop loaded')
  await page.evaluate(() => localStorage.clear())
  await page.reload({ waitUntil: 'networkidle' })
  await page.screenshot({ path: fileURLToPath(new URL('desktop-final.png', reviewDir)), fullPage: true })

  await page.getByRole('button', { name: /LLM 是什麼/ }).click()
  console.log('step: lesson 1 opened')
  const lessonOneSource = await page.locator('.source-links a').first().innerText()
  await page.locator('input[type="radio"]').first().check()
  await page.getByRole('button', { name: '提交並查看解析' }).click()
  await page.getByRole('button', { name: /Prompt 是什麼/ }).click()
  console.log('step: lesson 2 opened')
  const lessonTwoClean = {
    checked: await page.locator('input[type="radio"]:checked').count(),
    feedback: await page.locator('.quiz-feedback').count(),
    submitDisabled: await page.getByRole('button', { name: '提交並查看解析' }).isDisabled(),
  }

  await page.getByRole('button', { name: /建立第一個 Agent/ }).click()
  console.log('step: lesson 13 opened')
  const lessonThirteenSource = await page.locator('.source-links a').first().innerText()
  await page.getByRole('button', { name: /End Node 與完整測試/ }).click()
  console.log('step: lesson 16 opened')
  await page.getByRole('button', { name: '我已備妥以上證據' }).click()
  await page.reload({ waitUntil: 'networkidle' })
  await page.getByRole('button', { name: /End Node 與完整測試/ }).click()
  const evidencePersisted = await page.getByRole('button', { name: '已記錄 Project 證據' }).isVisible()
  await page.screenshot({ path: fileURLToPath(new URL('lesson-final.png', reviewDir)), fullPage: true })

  await page.getByRole('button', { name: '學習總站' }).click()
  const projectMetric = await page.locator('.metric-line div').filter({ hasText: 'Project 證據' }).locator('dd').innerText()

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })
  mobile.setDefaultTimeout(5000)
  mobile.on('console', (message) => {
    if (message.type() === 'error') errors.push(`mobile console: ${message.text()}`)
  })
  mobile.on('pageerror', (error) => errors.push(`mobile page: ${error.message}`))
  await mobile.goto(baseUrl, { waitUntil: 'networkidle' })
  await mobile.screenshot({ path: fileURLToPath(new URL('mobile-final.png', reviewDir)), fullPage: true })
  const mobileWidth = await mobile.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth }))

  const result = {
    lessonTwoClean,
    evidencePersisted,
    projectMetric,
    sourcesChangeByLesson: lessonOneSource !== lessonThirteenSource,
    lessonOneSource,
    lessonThirteenSource,
    mobileWidth,
    consoleErrors: errors,
  }
  console.log(JSON.stringify(result, null, 2))

  const passed = lessonTwoClean.checked === 0
    && lessonTwoClean.feedback === 0
    && lessonTwoClean.submitDisabled
    && evidencePersisted
    && projectMetric === '1/1'
    && result.sourcesChangeByLesson
    && mobileWidth.scrollWidth === mobileWidth.clientWidth
    && errors.length === 0
  if (!passed) process.exitCode = 1
} finally {
  await browser.close()
}
