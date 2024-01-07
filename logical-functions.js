const titleMin = document.querySelector(".min");
const titleMax = document.querySelector(".max");
const titleClamp = document.querySelector(".clamp");
const titleMinMax = document.querySelector(".minmax");

const titleMinMessage =
  "Width: min(<span class='highlight'>50%</span>, ${WIDTH})";
const titleMinMessageHighlight =
  "Width: min(50%, <span class='highlight'>${WIDTH}</span>)";

const titleMaxMessage =
  "Width: max(<span class='highlight'>50%</span>, ${WIDTH})";
const titleMaxMessageHighlight =
  "Width: max(50%, <span class='highlight'>${WIDTH}</span>)";

const titleClampMinMessasge =
  "Width: clamp(<span class='highlight'>200</span>, <span>50%</span>, <span>400</span>)";
const titleClampMidMessasge =
  "Width: clamp(<span>200</span>, <span class='highlight'>50%</span>, <span>400</span>)";
const titleClampMaxMessasge =
  "Width: clamp(<span>200</span>, <span>50%</span>, <span class='highlight'>400</span>)";

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const isMin = entry.target.classList.contains("min");
    const isMax = entry.target.classList.contains("max");
    const isClamp = entry.target.classList.contains("clamp");
    const isMinMax = entry.target.classList.contains("minmax");

    if (isMin) {
      if (entry.target.clientWidth === 400) {
        titleMin.innerHTML = titleMinMessageHighlight.replace(
          "${WIDTH}",
          entry.target.clientWidth
        );
      } else {
        titleMin.innerHTML = titleMinMessage.replace(
          "${WIDTH}",
          entry.target.clientWidth
        );
      }
    }

    if (isMax) {
      if (entry.target.clientWidth > 400) {
        titleMax.innerHTML = titleMaxMessage.replace(
          "${WIDTH}",
          entry.target.clientWidth
        );
      } else {
        titleMax.innerHTML = titleMaxMessageHighlight.replace(
          "${WIDTH}",
          entry.target.clientWidth
        );
      }
    }

    if (isClamp) {
      console.log("it is clamp!", entry.target.clientWidth);
      if (entry.target.clientWidth === 200) {
        titleClamp.innerHTML = titleClampMinMessasge;
      } else if (entry.target.clientWidth === 400) {
        titleClamp.innerHTML = titleClampMaxMessasge;
      } else {
        titleClamp.innerHTML = titleClampMidMessasge;
      }
    }
  }
});

resizeObserver.observe(titleMin);
resizeObserver.observe(titleMax);
resizeObserver.observe(titleClamp);
resizeObserver.observe(titleMinMax);
