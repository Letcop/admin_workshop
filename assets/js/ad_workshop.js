let workshopTitle = document.querySelector('.workshop_title');
let productsPage = document.querySelector('.products_page .sup_title');
let supTitle = document.querySelector('.sup_title');
let supTitleShop = document.querySelector('.sup_title_shop');
let productBtn = document.querySelectorAll('.btn_product');
let shopBtn = document.querySelectorAll('.btn_shop');
let productList = document.querySelectorAll('.product_list');
let moderations = document.querySelectorAll('.moderation');
let exposedBtn = document.querySelectorAll('.exposed');
let moderationList = document.querySelectorAll('.moderation_list')
let exposedList  = document.querySelectorAll('.exposed_list');
let editInfoWorkshops = document.querySelectorAll('tr .edit');
let adminWorkshopModal = document.getElementById('adminWorkshopModal');
let closeWorkshopModal = document.getElementById('closeWorkshopModal');
let editProductImgs = document.querySelectorAll('.edit_product_img');
let closeEditProducts = document.querySelectorAll('.close_edit_product');
let avatarImgs = document.querySelectorAll('.avatar_img');
let saveInfoModal = document.getElementById('saveInfoModal');
let removeInfoModal = document.getElementById('removeInfoModal');


moderations.forEach(moderation => {
    // let i = 1;
    moderation.addEventListener('click', () => {
        let countminus =  moderation.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[0].children[2].children[0].children[0]
        let countplus = moderation.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[0].children[1].children[0].children[0]
        let mod = moderation.parentElement.parentElement.parentElement.parentElement.parentElement
        mod.classList.add('exposed_list');
        mod.classList.remove('moderation_list');

        setTimeout(() => {
            countplus.value = +countplus.value + 1;
        }, 1600);

        setTimeout(() => {
            countminus.value = +countminus.value -  1;
        }, 600)



        moderation.nextElementSibling.style.display = 'inline-block'
        moderation.style.display = 'none'
    })
});


(function changingPageWops() {
    const products = workshopTitle.firstElementChild;
    const shops = workshopTitle.lastElementChild;

    products.addEventListener('click', handleProductPage);
    shops.addEventListener('click', handleShopPage);

    function handleShopPage() {
        shops.classList.add('active');
        products.classList.remove('active');

        products.parentElement.parentElement.children[1].style.display = 'none'
        shops.parentElement.parentElement.children[2].style.display = 'block'
    }

    function handleProductPage() {
        shops.classList.remove('active');
        products.classList.add('active')

        shops.parentElement.parentElement.children[2].style.display = 'none'
        products.parentElement.parentElement.children[1].style.display = 'block'
    }

    // Start products page
    const allProducts = productsPage.children[0];
    const exposedProducts = productsPage.children[1];
    const moderationProducts = productsPage.children[2];

    allProducts.addEventListener('click', handleAllProducts);
    exposedProducts.addEventListener('click', handleExposedProducts);
    moderationProducts.addEventListener('click', handleModerationProducts);
    
   productBtn.forEach(btn => {
       btn.addEventListener('click', () => {
        supTitle.querySelector('.active_product').classList.remove('active_product');

        btn.classList.add('active_product')
       });
   });

   shopBtn.forEach(btnShop => {
    btnShop.addEventListener('click', () => {
     supTitleShop.querySelector('.active_shop').classList.remove('active_shop');

     btnShop.classList.add('active_shop')
    });
});

function handleAllProducts() {
    let moderationList = document.querySelectorAll('.moderation_list')
    let exposedList  = document.querySelectorAll('.exposed_list');
    moderationList.forEach(elem => {
        elem.style.display = 'flex'
    });

    exposedList.forEach(elem => {
        elem.style.display = 'flex'
    });
}


function handleExposedProducts() {
    let moderationList = document.querySelectorAll('.moderation_list')
    let exposedList  = document.querySelectorAll('.exposed_list');
        moderationList.forEach(elem => {
            elem.style.display = 'none'
        });

        exposedList.forEach(elem => {
            elem.style.display = 'flex'
        });
}

function handleModerationProducts() {
    let moderationList = document.querySelectorAll('.moderation_list')
    let exposedList  = document.querySelectorAll('.exposed_list');
        moderationList.forEach(elem => {
            elem.style.display = 'flex'
        });

        exposedList.forEach(elem => {
            elem.style.display = 'none'
        });

        
}

    // End products page


    // Start Modal 

    editInfoWorkshops.forEach(btn => {
        btn.addEventListener('click', () => {
            let thisProductList = btn.parentElement.parentElement.parentElement.parentElement.parentElement;
            let productName = btn.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[2].children[0];

            let editProductName = adminWorkshopModal.children[0].children[1].children[1].children[1];
            let editProductPrice = adminWorkshopModal.children[0].children[1].children[2].children[1];
            adminWorkshopModal.style.display = 'flex'; 
            // console.dir(adminWorkshopModal.children[0].children[1].children[2].children[1])
            console.dir(btn.parentElement.parentElement.parentElement.parentElement.parentElement);

            

            saveInfoModal.addEventListener('click', ()=> {
                productName.innerText = editProductName.value
            });

            removeInfoModal.addEventListener('click', () => {
                let removeQuestion = prompt('Вы хотите удалить свои товары?  (да/нет)', 'нет');
                if(removeQuestion == 'да') {
                    // alert('Ваши продукты были удалены')
                    thisProductList.remove();
                    handleCloseModal();
                } else {
                }

            })
        })
    })

    
    closeWorkshopModal.addEventListener('click', handleCloseModal);

    function handleCloseModal() {
      adminWorkshopModal.style.display = 'none';      
    }
})();




// Удалить добавленной картинки
editProductImgs.forEach((editProductImg) => {
  editProductImg.addEventListener('mouseover', () => {
    editProductImg.parentElement.children[3].style.display = 'flex'
  })
});

editProductImgs.forEach((editProductImg) => {
  editProductImg.addEventListener('mouseout', () => {
    editProductImg.parentElement.children[3].style.display = 'none'
  })
});

closeEditProducts.forEach((closeEditProduct) => {
  closeEditProduct.addEventListener('click', () => {
    closeEditProduct.parentElement.children[2].style.display = 'none'
  })
});
closeEditProducts.forEach((closeEditProduct) => {
  closeEditProduct.addEventListener('mouseover', () => {
    closeEditProduct.style.display = 'flex'
  })
});
closeEditProducts.forEach((closeEditProduct) => {
  closeEditProduct.addEventListener('click', () => {
    closeEditProduct.style.display = 'none'
  })
});
// *********************************************************

// Добавить место удаленной картинки
avatarImgs.forEach((avatarImg) => {
  avatarImg.addEventListener('change', (e) => {
    e.target.parentElement.children[2]
    if(e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let addAvatar = e.target.parentElement.children[2];
      addAvatar.src = src;
      addAvatar.style.display = 'block'
    }
  });
});
// ***********************************************




