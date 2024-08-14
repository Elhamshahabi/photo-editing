const fileInput = document.querySelector(".file-input"),
  filterOptions = document.querySelectorAll(".filter button");
previewImg = document.querySelector(".preview-img img");
chooseImgBtn = document.querySelector(".choose-img");

const loadImage = () => {
  let file = fileInput.files[0];
  if (!file) return;
  previewImg.src = URL.createObjectURL(file);
  previewImg.addEventListener("load", () => {
    document.querySelector(".container").classList.remove("disable");
  });
};

filterOptions.forEach((Option) => {
  Option.addEventListener("click", () => {
    document.querySelector(".filter .active").classList.remove("active");
    Option.classList.add("active");
  });
});

fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());
