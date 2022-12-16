const canvas_space = document.getElementById('canvas_space');
const canvas = document.createElement('canvas');

width = window.innerWidth*0.9
canvas.width = width;
canvas.height = width*0.6;

canvas_space.appendChild(canvas);

const context = canvas.getContext('2d');


context.beginPath();
context.arc(width-50, 60, 30, 0, Math.PI * 2, true);
context.fillStyle = "lightskyblue";
context.fill();

document.addEventListener('onmousemove', onmousemove);
document.addEventListener('onmouseout', onmouseout);

onmousemove = function(e) {
  //マウスの座標をCanvas内の座標と合わせる
  const rect = canvas.getBoundingClientRect();
  const point = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
  
	//選択されているコマの座標を取得
  
  //他のコマの位置を計算、表示
}


offence_position = {
  1:[,],
  2:[,],
  3:[,],
  4:[,],
  5:[,],
}
function display() {

}