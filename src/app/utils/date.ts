export const convertDecimalToTime = (time: number) => {
  if (time === undefined) {
    return '';
  }
  
  let displayTime = '';

  if (time % 1 === .5) {
    displayTime = ':30';
    time -= .5;
  } else {
    displayTime = ':00';
  }

  if (time > 12) {
    displayTime += ' PM';
    time -= 12;
  } else {
    displayTime += ' AM';
  }

  return time + displayTime;
}