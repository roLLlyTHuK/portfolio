const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kiyv, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram/Viber</h2>
            <p>
              <a href="tel:+380660745969">+38 (066) 074-59-69</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:dovhaniuk.andriy@gmail.com">
                dovhaniuk.andriy@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
