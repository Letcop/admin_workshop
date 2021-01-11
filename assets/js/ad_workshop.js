let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('.workshop_body');
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
// Start page shops
let moderationShops = document.querySelectorAll('.moderation_shop');
let moderationShopListBtn = document.querySelector('.moderation_shop_list_btn');
let allShopsList = document.querySelector('.all_shops_list');
let editShop = document.querySelectorAll('.edit_shop');
let editShopModal = document.getElementById('editShopModal');
let saveInfoShopModal = document.getElementById('saveInfoShopModal');
let blockInfoShopModal = document.getElementById('blockInfoShopModal');
let closeShopModal = document.getElementById('closeShopModal');


// start chat
showChat.addEventListener('click', () => {
  chatText.style.visibility = 'hidden'
});

let click;
chat.addEventListener('click', () => {
  if(click == 0) {
  chatText.style.visibility = 'hidden'
  return click = 1;
  }
  else {
  chatText.style.visibility = 'visible'
  return click = 0;
  }
});
// End chat

// Start Products page

(function changingPageProducts() {

  // Добавить товар
  moderations.forEach(moderation => {
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

// Сортировка товары
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
            adminWorkshopModal.style.display = 'flex'; 
        let thisProductList = btn.parentElement.parentElement.parentElement.parentElement.parentElement

          // Сохранить товар
            saveInfoModal.addEventListener('click', ()=> {
              handleCloseModal()
            });

            // Удалить товар
            removeInfoModal.addEventListener('click', () => {
                let removeQuestion = prompt('Вы хотите удалить свои товары?  (да/нет)', 'нет');
                if(removeQuestion == 'да') {
                    thisProductList.remove();
                    handleCloseModal();
                } else {
                  handleCloseModal();
                }

            })
        })
    })

    
    closeWorkshopModal.addEventListener('click', handleCloseModal);

    function handleCloseModal() {
      adminWorkshopModal.style.display = 'none';      
    }

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
})();

// End Products page


// Start Shops page

(function changingPageShops() {
  moderationShops.forEach(moderation => {
    moderation.addEventListener('click', () => {
      console.dir(moderation.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[0].children[1].children[0].children[0])
        let countplus = moderation.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[0].children[1].children[0].children[0]
        let mod = moderation.parentElement.parentElement.parentElement.parentElement.parentElement
        console.dir(moderation.parentElement.parentElement.parentElement.parentElement.parentElement)
        mod.classList.add('moderation_shop_list');
        // mod.classList.remove('moderation_list');

        setTimeout(() => {
            countplus.value = +countplus.value - 1;
        }, 1600);


        moderation.nextElementSibling.style.display = 'inline-block'
        moderation.style.display = 'none'
    })
});

// товар модерации

moderationShopListBtn.addEventListener('click', () => {
  let allShopList = document.querySelectorAll('.all_shop_list');
  let moderationShopList = document.querySelectorAll('.moderation_shop_list');

  allShopList.forEach(elem => {
    elem.style.display = 'flex'

  });

  moderationShopList.forEach(elemModeration => {
    elemModeration.style.display = 'none'

  })
});

// Все товары

allShopsList.addEventListener('click', () => {
  let allShopList = document.querySelectorAll('.all_shop_list');
  let moderationShopList = document.querySelectorAll('.moderation_shop_list');

  allShopList.forEach(elem => {
    elem.style.display = 'flex'

  });

  // moderationShopList.forEach(elemModeration => {
  //   elemModeration.style.display = 'none'

  // })
});

editShop.forEach(btn => {
  btn.addEventListener('click', ()=> {
    editShopModal.style.display = 'flex'
  })
});
closeShopModal.addEventListener('click', () => {
  editShopModal.style.display = 'none'
});
saveInfoShopModal.addEventListener('click', () => {
  alert("Ваше изменение было сохранено");
  editShopModal.style.display = 'none'
});
})();

// End Shops page


const abs = function() {
  abs.count = 1

  console.log(abs.count)
}

abs()








