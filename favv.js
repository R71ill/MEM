
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    function showFavorites() {
        const favoritesContainer = document.getElementById('favorites');
        favoritesContainer.innerHTML = '';

        if (favorites.length === 0) {
            favoritesContainer.innerHTML = '<p class="error-message">عذراً لم تقم بإضافة أي عناصر إلى المفضلة بعد</p>';
        } else {
            favorites.forEach(fav => {
                const favItem = document.createElement('div');
                favItem.classList.add('shop-item');

                favItem.innerHTML = `
                    <div class="image-container">
                        <img class="shop-item-image" src="${fav.imgSrc}" alt="Shop Item">
                        <div class="top-right-rectangle">${fav.rectangle}</div>
                        <button class="favorite-btn active"><i class="fas fa-heart"></i></button>
                    </div>
                    <div class="shop-item-details">
                        <span class="shop-item-title">${fav.title}</span>
                    </div>
                    <span class="shop-item-tslem">
                        ${fav.tslem}
                    </span>
                `;

                favItem.querySelector('.favorite-btn').addEventListener('click', function() {
                    const index = favorites.findIndex(f => f.id === fav.id);
                    if (index !== -1) {
                        favorites.splice(index, 1);
                        localStorage.setItem('favorites', JSON.stringify(favorites));
                        showFavorites();
                        // تشغيل الصوت
                        document.getElementById('favSound').play();
                        vibrateDevice();
                    }
                });

                favoritesContainer.appendChild(favItem);
            });
        }
    }

    // Initial call to show favorites if any
    showFavorites();
    
    function vibrateDevice() {
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]); // Vibrate for 200ms, pause for 100ms, then vibrate for 200ms
      }
    }


  localStorage.setItem('returnFromFavPage', 'true');
  
  
function toggleNav() {
  var nav = document.getElementById("nav");
  nav.classList.toggle("active");

  var menuIcon = document.getElementById("menuIcon");
  var closeIcon = document.getElementById("closeIcon");

  if (nav.classList.contains("active")) {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}
$(document).ready(function() {
  // استمع للنقر على أي رابط داخل الـ navbar
  $('.navbar a').on('click', function() {
    // أغلق الـ navbar عن طريق إزالة الفئة "active"
    $('#nav').removeClass('active');

    // إعادة عرض رمز القائمة وإخفاء رمز الإغلاق
    $('#menuIcon').show();
    $('#closeIcon').hide();
  });
});
// JavaScript لإضافة وإزالة الفئة active عند النقر
$(document).ready(function() {
  $('.navbar a').on('click', function() {
    $('.navbar a').removeClass('active');
    $(this).addClass('active');
  });
});


  document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.querySelector("#switch");

    toggleSwitch.addEventListener("change", function() {
      if (this.checked) {
        // تفعيل الوضع النهاري
        document.body.classList.add("day-mode");
        document.body.classList.remove("night-mode");
      } else {
        // تفعيل الوضع الليلي
        document.body.classList.add("night-mode");
        document.body.classList.remove("day-mode");
      }
    });
  });
  document.getElementById('switch').addEventListener('change', function() {
  var isDayMode = this.checked;
  var magorLogo = document.querySelector('.magor-logo');
  var teleImage = document.querySelector('.tele-image');

  if (isDayMode) {
    magorLogo.src = 'assets/ii.jpeg'; // تعديل المسار إلى صورة النهار المناسبة
    teleImage.src = 'assets/perfil.png'; // تعديل المسار إلى صورة النهار المناسبة
  } else {
    magorLogo.src = 'assets/i.jpeg'; // تعديل المسار إلى صورة الليل المناسبة
    teleImage.src = 'assets/perfil.png'; // تعديل المسار إلى صورة الليل المناسبة
  }
});

