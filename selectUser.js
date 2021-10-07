const getAllUser = async () => {
  try {
    const response = await axios.get("./db.json"); // 추후 수정
    if (response.data) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const getUserByAddress = async () => {
  const nameInput = document.querySelector(".nameInput").value;
  if (nameInput) {
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
