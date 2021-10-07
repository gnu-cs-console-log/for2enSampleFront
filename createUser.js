const createUser = async () => {
  const nameInput = document.querySelector(".nameInput").value;
  const addressInput = document.querySelector(".addressInput").value;
  if (nameInput && addressInput) {
    try {
      const response = await axios.get("./db.json"); // 추후 수정
      if (response.data) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
