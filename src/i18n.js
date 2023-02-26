import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          News: 'News',
          Find_pet: 'Find pet',
          Our_friends: 'Our friends',
          Login: 'Login',
          Registration: 'Registration',
          Add_pet: 'Add pet',
          Add_notice: 'Add pet',
          Add_notice_m: 'Add pet',
          Time: 'Time:',
          Address: 'Address',
          Email: 'Email',
          Phone: 'Phone',
          Friends_404: `Sorry, we don't have any information at the moment. Please try
              again later. In the meantime, here's a cute photo.`,
          Title: 'Take good care of your small pets',
          Login_with_Google: 'Login with Google',
          No_account: `Don't have an account?`,
          The_sex: 'The sex',
          Male: 'Male',
          Female: 'Female',
          Location: 'Location',
          Price: 'Price',
          Load_img: `Load the pet’s image:`,
          Comments: 'Comments',
          Done: 'Done',
          Back: 'Back',
          Notice_add_pet: `You can sell or give your pets, or inform others about lost pets`,
          lost_found: 'lost/found',
          in_good_hands: 'in good hands',
          sell: 'sell',
          Tittle_of_ad: 'Tittle of ad ',
          Name_pet: 'Name pet',
          Date_of_birth: 'Date of birth',
          Breed: 'Breed',
          Next: 'Next',
          Cancel: 'Cancel',
          Submit: 'Submit',
          Add_pet_notification: 'Add photo and some comments',
          No_breed: `Didn't find the right breed?`,
          Write_by_hand: 'Write by hand',
          No_news_notification: 'There is no news with this title',
          Place: 'Place',
          Age: 'Age',
          very_old: 'very old',
          Learn_more: 'Learn more',
          favorite_ads: 'favorite ads',
          my_ads: 'my ads',
          have_account: 'Already have an account',
          Register: 'Register',
          My_pets: 'My pets',
          Name: 'Name',
          Log_out: 'Log out',
          Edit_photo: 'Edit photo',
          City: 'City',
          My_information: 'My information',
          Account: 'Account',
          Main_title: 'Find your favorite pet',
          Location_p: 'Type location',
          Price_p: 'Type price',
          Comments_p: 'Type comments',
          Name_pet_p: "Type pet's name",
          Type_name: 'Type name',
          Breed_p: 'Type breed',
          Breed_select: 'select a breed',
          Search: 'Search',
          Confirm_Password: 'Confirm Password',
          City_region: 'City, region',
          Mobile_phone: 'Mobile phone',
          Birthday: 'Birthday',
          Back_to_home: 'Back to home',
          email_match: 'Email must be in format mail@mail.com',
          email_min: 'Email should be 6 characters minimum.',
          email_max: 'Email should be 63 characters maximum.',
          email_required: 'Email is required',
          password_match:
            'At least one upper and lowercase letter, number, special character, space is not allowed',
          password_min: 'password should be 7 characters minimum.',
          password_max: 'password should be 32 characters maximum.',
          password_required: 'password is required',
          password_must: 'Password must match',
          password_login_match: 'White spaces is not allowed',
          confirm: 'Confirm password is required',
          name_validate: 'Name must contain only letters',
          location_validate: 'Location must be in format City, Region',
          phone_max: 'Pnone number must contain 12 numbers',
          phone_match: 'Mobile phone must be in format +380xxxxxxxxx',
          title_min: 'Title should be 2 characters minimum.',
          title_max: 'Title should be 48 characters maximum.',
          title_required: 'Title is required field',
          pet_name_match: 'Name has the format "Barsik"',
          pet_name_min: 'Name should be 2 characters minimum.',
          pet_name_max: 'Name should be 16 characters maximum.',
          pet_name_required: 'Name is required field',
          date_pet_string: 'Date must be in format dd.MM.yyyy',
          date_pet_required: 'Date is required field',
          breed_match: 'Breed must contain only letters',
          breed_min: 'Breed should be 2 characters minimum',
          breed_max: 'Breed should be 40 characters maximum.',
          breed_required: 'Breed is required field',
          location_match: 'Location must be in format: City, Region',
          location_required: 'Location is required field',
          price_match: 'Must contain only numbers',
          commet_min: 'Comment should be 10 characters minimum.',
          commet_max: 'Comment should be 100 characters maximum.',
          commet_required: 'Comment is required field',
          birthday_match: 'Birthday has the format "12.05.2022"',
          birthday_required: 'Birthday required',
          photo_required: 'Photo required',
          commet_min_: 'Comment should be 8 characters minimum.',
          commet_max_: 'Comment should be 120 characters maximum.',
          commet_required_: 'Comment is required field',
          t_login_1: 'Something wrong, please try again later',
          t_login_2: 'Google login Failed',
          t_photo: `Photo must be no larger than 5 megabytes`,
          new_notice_create: 'New Notice created successfully',
          all_field: `All fields must be filled`,
          t_samething_wrong: 'Something wrong',
        },
      },
      ua: {
        translation: {
          News: 'Новини',
          Find_pet: 'Знайти улюбленця',
          Our_friends: 'Наші друзі',
          Login: 'Логін',
          Registration: 'Реєстрація',
          Add_pet: 'Додати улюбленця',
          Add_notice: 'Додати оголошення',
          Add_notice_m: 'Додати',
          Time: 'Час',
          Address: 'Адреса',
          Email: 'Пошта',
          Phone: 'Телефон',
          Friends_404: `На жаль, на даний момент у нас немає жодної інформації. Будь ласка, спробуй
              знову пізніше. А поки що ось миле фото.`,
          Title: 'Дбайте про своїх маленьких домашніх тварин',
          Login_with_Google: 'Увійти з Google',
          No_account: `Немає облікового запису?`,
          The_sex: 'Стать',
          Male: 'Хлопчик',
          Female: 'Дівченка',
          Location: 'Місце знаходження',
          Price: 'Ціна',
          Load_img: `Додати фото тваринки:`,
          Comments: 'Коментарі',
          Done: 'Готово',
          Back: 'Назад',
          Notice_add_pet: `Ви можете продати або подарувати своїх домашніх тварин, або повідомити іншим про втрачених домашніх тварин`,
          lost_found: 'зник/знайшовся',
          in_good_hands: 'в добрі руки',
          sell: 'продаж',
          Tittle_of_ad: 'Назва оголошення ',
          Name_pet: `Ім'я вихованця`,
          Date_of_birth: 'Дата народження',
          Breed: 'Порода',
          Next: 'Далі',
          Cancel: 'Відміна',
          Submit: 'Надіслати',
          Add_pet_notification: 'Додайте фото та кілька коментарів',
          No_breed: `Не знайшла потрібної породи?`,
          Write_by_hand: 'Напишіть самі',
          No_news_notification: 'Новин з такою назвою немає',
          Place: 'Місце',
          Age: 'Вік',
          very_old: 'дуже старий',
          Learn_more: 'Дізнатись більше',
          favorite_ads: 'улюблені оголошення',
          my_ads: 'мої оголошення',
          have_account: 'Вже є акаунт',
          Register: 'Реєстрація',
          My_pets: 'Мої улюбленці',
          Name: `Ім'я`,
          Log_out: 'Вийти',
          Edit_photo: 'Додати фото',
          City: 'Місто',
          My_information: 'Інформація',
          Account: 'Акаунт',
          Main_title: 'Знайди свого улюбленого вихованця',
          Location_p: 'Введіть Місто, Область',
          Price_p: 'Введіть ціну',
          Comments_p: 'Введіть коментар',
          Name_pet_p: `Введіть ім'я улюбленця`,
          Type_name: `Введіть назву оголошення`,
          Breed_p: 'Введіть породу',
          Breed_select: 'оберіть породу',
          Search: 'Пошук',
          Confirm_Password: 'Підтвердіть Пароль',
          City_region: 'Місто, Регіон',
          Mobile_phone: 'Номер телефону',
          Birthday: 'Народився',
          email_match: 'пошта повинна бути в форматі mail@mail.com',
          email_min: 'Електронна пошта має містити мінімум 6 символів.',
          email_max: 'Електронна пошта може містити максимум 63 символи.',
          email_required: `Електронна пошта є обов'язковою.`,
          password_match:
            'Пароль маємістити 1 літеру верхнього та нижнього регістру, цифру і спеціальний символ. Пробіли не допускаються.',
          password_min: 'Пароль має містити мінімум 7 символів.',
          password_max: 'Пароль має бути не довшим за 32 символи.',
          password_required: 'Потрібен пароль.',
          password_must: 'Паролі мають співпадати.',
          password_login_match: 'Пробіли не допускаються.',
          confirm: 'Необхідне підтвердження паролю.',
          name_validate: `Ім'я має містити тільки тільки літери.`,
          location_validate: 'Місце має бути в форматі Місто, Область.',
          phone_max: 'Номер телефону має містити 12 символів.',
          phone_match: 'Номер телефону має бути у форматі +380xxxxxxxxx',
          title_min: 'Заголовок має містити мінімум 2 символи.',
          title_max: 'Заголовок може містити максимум 48 символів.',
          title_required: `Заголовок є обов'язковим.`,
          pet_name_match: `Ім'я має бути у форматі "Барсик"`,
          pet_name_min: `Ім'я має містити мінімум 2 символи.`,
          pet_name_max: `Ім'я може містити максимум 16 символів.`,
          pet_name_required: `Ім'я є обов'язковим.`,
          date_pet_string: 'Дата має бути у форматі дд.мм.рррр.',
          date_pet_required: `Дата є обов'язковою.`,
          breed_match: 'Назва породи має містити тільки літери.',
          breed_min: 'Назва породи має містити мінімум 2 символи.',
          breed_max: 'Назва породи може містити максимум 40 символів.',
          breed_required: `Назва породи є обов'язковою.`,
          location_match: 'Місце має бути в форматі Місто, Область.',
          location_required: `Назва місця є обов'язковою.`,
          price_match: 'Ціна має містити тільки цифри.',
          commet_min: 'Коментар має містити мінімум 10 символів.',
          commet_max: 'Коментар може містити максимум 100 символів.',
          commet_required: `Коментар є обов'язковим.`,
          birthday_match: 'Дата народження має бути у форматі "12.05.2022"',
          birthday_required: `Дата народження є обов'язковою.`,
          photo_required: `Фотографія є обов'язковою.`,
          commet_min_: 'Коментар має містити мінімум 8 символів.',
          commet_max_: 'Коментар може містити максимум 120 символів.',
          commet_required_: `Коментар є обов'язковим.`,
          t_login_1: 'Щось не так, будь ласка, спробуйте пізніше.',
          t_login_2: 'Помилка входу в Google',
          t_photo: `Фото має бути не більше 5 мегабайт`,
          new_notice_create: 'Нове повідомлення успішно створено',
          all_field: `Усі поля мають бути заповнені`,
          t_samething_wrong: 'Щось не так',
        },
      },
    },
  });

export default i18n;
