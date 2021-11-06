# CSP Safari bug repro

There appears to be a discrepancy between how Safari handles CSP policies for
extension pages compared to how other browsers do so.

This causes problems for adapting to Google Docs' new canvas mode which requires
injecting script in this manner.

## Steps to reproduce

In Safari:

1. Load `CSP bug repro/CSP bug repro.xcodeproj` in XCode 13.
2. Run the project
3. It should provide a Window with a button to jump to Safari and enable the
   extension
4. You will need to enable unsigned extensions using Develop → Allow Unsigned
   Extensions
5. Navigate to [docs.google.com](https://docs.google.com)
6. Load any Google doc
7. Press the star button on the toolbar, granting permission to run if needed.
8. Open the Javascript console from the Develop menu
9. Look for the line beginning, `"Script ran..."`.
10. As per the message look for CSP errors prior to that line.
11. Enter `window.testme` + <kbd>Enter</kbd> an observe the result.

Expected results:

- No CSP errors
- `"ok"` is returned

Actual results:

- Several CSP errors of the form "Refused to execute a script because its hash,
  its nonce, or 'unsafe-inline' does not appear in the script-src directive of
  the Content Security Policy".
- `undefined` is returned.

To compare with Firefox / Chrome:

1. Install [`npx`](https://www.npmjs.com/package/npx) globally.
2. From the root `csp-bug` folder, run `npx web-ext run` for Firefox, or
   `npx web-ext run -t chromium` for Chrome.
3. Similarly, load any document from [docs.google.com](https://docs.google.com)
   and check the Developer console (<kbd>F12</kbd> → Console).
