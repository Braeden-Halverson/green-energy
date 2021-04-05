function preloader() {
    const imagesList = [
        "./img/solar.png",
        "./img/water.png",
        "./img/wind-mill.png"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }
};
window.addEventListener("load", preloader);

const btns = document.querySelectorAll('.controls button');
let container = document.querySelector('.loaded-content');
let ctrl = [
    btns[0],
    btns[1],
    btns[2]
];

let resource = [
    {
        headingContent: 'Solar Power',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna et justo laoreet rutrum et id nulla. Suspendisse sit amet pellentesque odio. Vestibulum eu mollis sem. Vestibulum gravida nulla nec tempor vehicula. Proin porta libero mauris, at tempor ipsum porttitor a. Morbi lorem nibh, mattis ornare turpis vulputate, volutpat commodo diam. Sed fermentum erat nec sodales placerat. Fusce id aliquam nibh. Curabitur eget magna lorem. In hac habitasse platea dictumst. Nulla sollicitudin sagittis odio, nec pulvinar augue faucibus eget. Nullam ac maximus orci. Etiam ullamcorper cursus diam, at interdum nulla. Vestibulum vulputate, diam et tempor dignissim, felis leo fermentum neque, eu venenatis arcu sapien id sem. Morbi mauris ex, ullamcorper et elit nec, ultricies luctus massa. Vestibulum sit amet tempor libero. Aenean pretium malesuada aliquet. Nam mollis hendrerit porta. Cras ut sem purus. Nam sit amet dui tortor. Vivamus cursus erat at justo imperdiet tempus at vitae massa. Aenean eu feugiat metus, eu scelerisque diam. Vivamus tristique pulvinar interdum. Pellentesque condimentum finibus magna eget ultricies. Donec sagittis finibus urna, sed fringilla felis iaculis at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id tellus maximus, lobortis felis id, lobortis lorem. Suspendisse mollis eleifend felis, ut placerat augue viverra et. Fusce a metus at tortor feugiat accumsan. Etiam vel consectetur mauris. Pellentesque egestas gravida consequat. Aliquam ornare ex dolor, ut eleifend justo convallis id. Nulla id enim turpis. Donec iaculis congue nisl, quis pretium urna dapibus at. Suspendisse sodales ipsum velit, ac facilisis mi condimentum eget. Fusce viverra nisl quam, eu elementum tellus euismod eu. Sed vel neque sit amet justo laoreet iaculis. Aliquam ullamcorper eget leo mollis ornare. Ut venenatis efficitur egestas. Aliquam interdum vulputate interdum. Praesent id suscipit metus, a dapibus est. Mauris pharetra justo libero, sed consequat erat aliquet eget.',
        imgUrl: './img/solar.png',
        imgAlt: 'Sun Image'
    },
    {
        headingContent: 'Wind Power',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna et justo laoreet rutrum et id nulla. Suspendisse sit amet pellentesque odio. Vestibulum eu mollis sem. Vestibulum gravida nulla nec tempor vehicula. Proin porta libero mauris, at tempor ipsum porttitor a. Morbi lorem nibh, mattis ornare turpis vulputate, volutpat commodo diam. Sed fermentum erat nec sodales placerat. Fusce id aliquam nibh. Curabitur eget magna lorem. In hac habitasse platea dictumst. Nulla sollicitudin sagittis odio, nec pulvinar augue faucibus eget. Nullam ac maximus orci. Etiam ullamcorper cursus diam, at interdum nulla. Vestibulum vulputate, diam et tempor dignissim, felis leo fermentum neque, eu venenatis arcu sapien id sem. Morbi mauris ex, ullamcorper et elit nec, ultricies luctus massa. Vestibulum sit amet tempor libero. Aenean pretium malesuada aliquet. Nam mollis hendrerit porta. Cras ut sem purus. Nam sit amet dui tortor. Vivamus cursus erat at justo imperdiet tempus at vitae massa. Aenean eu feugiat metus, eu scelerisque diam. Vivamus tristique pulvinar interdum. Pellentesque condimentum finibus magna eget ultricies. Donec sagittis finibus urna, sed fringilla felis iaculis at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id tellus maximus, lobortis felis id, lobortis lorem. Suspendisse mollis eleifend felis, ut placerat augue viverra et. Fusce a metus at tortor feugiat accumsan. Etiam vel consectetur mauris. Pellentesque egestas gravida consequat. Aliquam ornare ex dolor, ut eleifend justo convallis id. Nulla id enim turpis. Donec iaculis congue nisl, quis pretium urna dapibus at. Suspendisse sodales ipsum velit, ac facilisis mi condimentum eget. Fusce viverra nisl quam, eu elementum tellus euismod eu. Sed vel neque sit amet justo laoreet iaculis. Aliquam ullamcorper eget leo mollis ornare. Ut venenatis efficitur egestas. Aliquam interdum vulputate interdum. Praesent id suscipit metus, a dapibus est. Mauris pharetra justo libero, sed consequat erat aliquet eget.',
        imgUrl: './img/wind-mill.png',
        imgAlt: 'Windmill Image'
    },
    {
        headingContent: 'Water/Rainfall',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna et justo laoreet rutrum et id nulla. Suspendisse sit amet pellentesque odio. Vestibulum eu mollis sem. Vestibulum gravida nulla nec tempor vehicula. Proin porta libero mauris, at tempor ipsum porttitor a. Morbi lorem nibh, mattis ornare turpis vulputate, volutpat commodo diam. Sed fermentum erat nec sodales placerat. Fusce id aliquam nibh. Curabitur eget magna lorem. In hac habitasse platea dictumst. Nulla sollicitudin sagittis odio, nec pulvinar augue faucibus eget. Nullam ac maximus orci. Etiam ullamcorper cursus diam, at interdum nulla. Vestibulum vulputate, diam et tempor dignissim, felis leo fermentum neque, eu venenatis arcu sapien id sem. Morbi mauris ex, ullamcorper et elit nec, ultricies luctus massa. Vestibulum sit amet tempor libero. Aenean pretium malesuada aliquet. Nam mollis hendrerit porta. Cras ut sem purus. Nam sit amet dui tortor. Vivamus cursus erat at justo imperdiet tempus at vitae massa. Aenean eu feugiat metus, eu scelerisque diam. Vivamus tristique pulvinar interdum. Pellentesque condimentum finibus magna eget ultricies. Donec sagittis finibus urna, sed fringilla felis iaculis at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id tellus maximus, lobortis felis id, lobortis lorem. Suspendisse mollis eleifend felis, ut placerat augue viverra et. Fusce a metus at tortor feugiat accumsan. Etiam vel consectetur mauris. Pellentesque egestas gravida consequat. Aliquam ornare ex dolor, ut eleifend justo convallis id. Nulla id enim turpis. Donec iaculis congue nisl, quis pretium urna dapibus at. Suspendisse sodales ipsum velit, ac facilisis mi condimentum eget. Fusce viverra nisl quam, eu elementum tellus euismod eu. Sed vel neque sit amet justo laoreet iaculis. Aliquam ullamcorper eget leo mollis ornare. Ut venenatis efficitur egestas. Aliquam interdum vulputate interdum. Praesent id suscipit metus, a dapibus est. Mauris pharetra justo libero, sed consequat erat aliquet eget.',
        imgUrl: './img/water.png',
        imgAlt: 'Water Image'
    },
];

function handleSelection(e) {
    for (let i = 0; i < ctrl.length; i++){
        if (btns[i].hasAttribute('id')){
            btns[i].removeAttribute('id');
        }
    }

    let currentButton = e.target;
    currentButton.id = "active";
    
    let b = ctrl.indexOf(currentButton);
        container.innerHTML = `
            <div>
                <h2>${resource[b].headingContent}</h2>
                <div>
                    <img src="${resource[b].imgUrl}" alt="${resource[b].imgAlt}">
                    <p>${resource[b].bodyText}"</p>
                </div>
            </div>`;
};

for (let a = 0; a < btns.length; a++){
    btns[a].addEventListener('click', handleSelection);
    if(btns[a].hasAttribute('id')){
        container.innerHTML = `
            <div>
                <h2>${resource[a].headingContent}</h2>
                <div>
                    <img src="${resource[a].imgUrl}" alt="${resource[a].imgAlt}">
                    <p>${resource[a].bodyText}</p>
                </div>
            </div>`
    }
};