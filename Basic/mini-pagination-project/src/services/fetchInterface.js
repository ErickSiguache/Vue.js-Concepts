function Ifetch(url) {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err.message;
    });
}

export default Ifetch;
