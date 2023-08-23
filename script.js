function startTab() {

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
startTab();

function startAcordion() {

    const accordionList = document.querySelectorAll('.js-acordion dt');
    const activeName = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeName);
        accordionList[0].nextElementSibling.classList.add(activeName);

        function activeAcordion() {
            this.classList.toggle(activeName);
            this.nextElementSibling.classList.toggle(activeName);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAcordion);
        });
    }
}
startAcordion();

function scrollSuave() {

    const insadeLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const linkHref = event.currentTarget.getAttribute('href');
        const section = document.querySelector(linkHref);
        // const topo = section.offsetTop;

        section.scrollIntoView({
            behavior: "smooth",
            block: 'start',
        });

        // window.scrollTo({  FORMA ALTERNATIVA
        //     top: topo,
        //     behavior: "smooth",
        // });

    }

    insadeLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
scrollSuave();


function scrollAnimation() {


    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.7;
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');
                }
                // else 
                // section.classList.remove('ativo');
            })
        }
        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }

}
scrollAnimation();