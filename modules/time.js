import { DateTime } from './luxon.js';

export default function Time() {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const timePart = document.querySelector('#time');
  timePart.textContent = now.toLocaleString();
}