const timeConverter = time => {
  let t = time.split(":");
  let cTime;
  if (t[0] >= 12) {
    if (t[0] === 12) {
      cTime = `${t[0]}:${t[1]}p`;
      return cTime;
    } else if (t[0] === 24) {
      cTime = `${t[0] - 12}:${t[1]}a`;
      return cTime;
    } else {
      cTime = `${t[0] - 12}:${t[1]}p`;
      return cTime;
    }
  }
  if (t[0] < 12) {
    cTime = `${t[0]}:${t[1]}a`;
    return cTime;
  }
};

export default timeConverter;
