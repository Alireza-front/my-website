document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.section-box1');
  if (box) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          box.classList.add('animate');
        } else {
          box.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(box);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.section-box2');
  if (box) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          box.classList.add('animate');
        } else {
          box.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(box);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.section-box3');
  if (box) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          box.classList.add('animate');
        } else {
          box.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(box);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.section-box4');
  if (box) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          box.classList.add('animate');
        } else {
          box.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(box);
  }
});


/*let number=Number(prompt("How a favriod number?"))

console.log(number)

if(number>10){

    console.log("اعداد بالاتر از 10 بهترین انتخاب است!")

}else{

    console.log("اعداد کمتر از 10 بهترین انتخاب است!")
}*/
