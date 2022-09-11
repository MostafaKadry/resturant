const Content = () => {
  return `
  <div class="w-100 background-imgs">
    <div class="bg-redio-btns hide-992">
      <input type="radio" id="bg-img-1" name="bg-img" value="bg-img-1" onclick="setBgImg(0)"/>
      <br>
      <input type="radio" id="bg-img-2" name="bg-img" value="bg-img-2" onclick="setBgImg(1)"/>
      <br>
      <input type="radio" id="bg-img-3" name="bg-img" value="bg-img-3" onclick="setBgImg(2)"/>
    
    </div>
    <div class="background-imgs-container">
      <img src="./imgs/background-img.jpg" alt="background" class="w-100 background-img open-background-img" />
      <img src="./imgs/background-img-2.jpg" alt="background" class="w-100 background-img" />
      <img src="./imgs/background-img-3.jpg" alt="background" class="w-100 background-img" />
    </div>
  </div>
    `;
};

export default Content;
