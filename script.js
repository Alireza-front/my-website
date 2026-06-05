const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector("logo");
 
const activePage = () => {
    
    
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    
    header.classList.remove('active');
    setTimeout(() =>{
        header.classList.add('active');
    },1100);


    navLinks.forEach(link =>{
        link.classList.remove('active');
    });


    barsBox.classList.remove('active');
    setTimeout(() =>{
        barsBox.classList.add('active');
    },1100);

    
}

navLinks.forEach((link , idx) =>{
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');
        }
    });
});

logoLink.addEventListener('click', () =>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

    }
});


const rezumeBtns= document.querySelectorAll('.rezume-btn');


rezumeBtns.forEach((btn,idx)=>{
    btn.addEventListener('click' , () => {
        const rezumeDetails = document.querySelectorAll('.rezume-detail')


        rezumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
            btn.classList.add('active');

        rezumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        
        rezumeDetails[idx].classList.add('active');

     });
});

const arrowRight = document.querySelector('.protfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.protfolio-box .navigation .arrow-left');


let index = 0;

const activeProtfolio = () =>{
    const imgSlide = document.querySelector('.protfolio-carousel .img-slide');
    const protfolioDetails = document.querySelectorAll('.protfolio-detail');


    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index *2}rem))`;

    protfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    protfolioDetails[index].classList.add('active');
}



arrowRight.addEventListener('click' , () => {
    if(index < 2){
        index ++;
        arrowLeft.classList.remove('disabled');
    }else{
        index=3;
        arrowRight.classList.add('disabled');
    }

    activeProtfolio();
});


arrowLeft.addEventListener('click' , () => {
    if(index > 1){
        index --;
        arrowRight.classList.remove('disabled');
    }else{
        index=0;
        arrowLeft.classList.add('disabled');
    }

    activeProtfolio();
});
