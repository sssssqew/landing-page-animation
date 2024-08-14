let header = document.querySelector('.header')
let site = document.querySelector('.site')
let cta = document.querySelector('.cta')
let homeLeft = document.querySelector('.home-left')

let imageOverlay = document.querySelector('.image-container').children[0]
let mainImage = document.querySelector('.image-container').children[1]
console.log(mainImage)

let links = Array.from(document.querySelectorAll('.link'))

function animate(){
   
    setTimeout(() => {
        header.classList.add('active') // 0.5초 애니메이션 
        imageOverlay.style.animation = `slide 3s forwards`
        mainImage.style.animation = 'slide-perm 3s forwards'
    }, 2000); // home-left 요소가 브라우저에 완전히 보이는데 (애니메이션하는데) 2초가 걸림. 그 이후에 다른 애니메이션을 적용하기 위해서 2초로 잡음.

    setTimeout(() => {
        site.classList.add('active') // 0.5초 애니메이션 
        cta.classList.add('active') // 0.5초 애니메이션 
    }, 5000) // home-left 2초 애니메이션, 이미지 3초 애니메이션 이후에 글자가 보이도록 함

    links.forEach((link, idx) => {
        setTimeout(() => {
            link.classList.add('active') // 0.5초 애니메이션
        }, 5500 + (idx * 50)) // 두번째 site, cta 애니메이션이 동시에 발생하고 0.5초동안 지속되므로 해당 애니메이션은 5초 + 0.5초 후에 발생해야 함
        // 5500ms 부터 50ms 간격으로 link 글자가 나타남
    })
}

animate() // 주요코드








// 동일한 역할을 하는 코드 => setTimeout 대신 animationend, transitionend 이벤트 사용
// homeLeft.addEventListener("animationend", (event) => {
//     header.classList.add('active')
//     imageOverlay.style.animation = `slide 3s forwards`
//     mainImage.style.animation = 'slide-perm 3s forwards'
// });

// imageOverlay.addEventListener("animationend", (event) => {
//     site.classList.add('active') // 0.5초 애니메이션 
//     cta.classList.add('active') // 0.5초 애니메이션
// })

// site.addEventListener("transitionend", (event) => {
//     links.forEach((link, idx) => {
//         setTimeout(() => {
//             link.classList.add('active') // 0.5초 애니메이션
//         }, (idx * 50)) // 두번째 site, cta 애니메이션이 동시에 발생하고 0.5초동안 지속되므로 해당 애니메이션은 5초 + 0.5초 후에 발생해야 함
//         // 5500ms 부터 50ms 간격으로 link 글자가 나타남
//     })
// })

