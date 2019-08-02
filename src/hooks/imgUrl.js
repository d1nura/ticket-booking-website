const imgUrl = item => {
  for (let i of item.images) {
    if (i.width === 1024) {
      return i.url;
    }
  }
};

export default imgUrl;
