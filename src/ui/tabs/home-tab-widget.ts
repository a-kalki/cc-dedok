import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TabContentWidget } from '../tab-content-widget';
import type { ImageContent, TermCardContent } from '../types';

@customElement('home-tab-widget')
export class HomeTabContentWidget extends TabContentWidget {
  imageSliderContents: ImageContent[] = [
    {
      src: './images/home_1.jpg',
      description: 'Поиск начинается с проб',
    },
    {
      src: './images/home_2.jpg',
      description: 'Место, где живут возможности',
    },
    {
      src: './images/home_3.jpg',
      description: 'Пространство, где идеи оживают',
    },
    {
      src: './images/home_4.jpg',
      description: 'Объединяйтесь, творите новую реальность',
    },
  ]

  private termCardsContents: TermCardContent[] = [
    {
      title: 'Коворкинг',
      body: 'это пространство, где люди с разными профессиями работают рядом, обмениваются идеями и вдохновляются друг другом. Это место для творчества, общения и новых возможностей.',
    },
    {
      title: 'Мастерская',
      body: 'это рабочее пространство, оснащенное инструментами и оборудованием, необходимым для создания физических изделий. Здесь ваши идеи обретают форму',
    },
    {
      title: 'Коворкинг-мастерская',
      body: 'это синтез этих двух идей. Место где люди разных профессий не просто работают, а взаимодействуют, делясь навыками, идеями и энергией',
    }
  ]

  private workOptionsCardsContents: TermCardContent[] = [
    {
      title: 'Хоббист',
      body: 'используйте мастерскую для самовыражения, оттачивайте навыки и получайте удовольствие от творчества',
    },
    {
      title: 'Мастер',
      body: 'создавайте изделия для получения финансового дохода, развивайтесь как профессионал',
    },
    {
      title: 'Ментор',
      body: 'проводите мастер-классы, обучайте других и получайте дополнительный доход',
    },
    {
      title: 'Партнер',
      body: 'развивайте коворкинг мастерскую как член команды и получите свою долю бизнеса',
    },
    {
      title: 'Спонсор',
      body: 'вам нравится то что мы делаем? Любой человек может стать нашим спонсором!',
    }
  ];

  private rulesCardsContents: TermCardContent[] = [
    {
      title: 'Правило 1',
      body: 'будьте вежливы и уважительны ко всем',
    },
    {
      title: 'Правило 2',
      body: 'по возможности, помогайте другим советом и делом',
    },
    {
      title: 'Правило 3',
      body: 'будьте честны в отношениях',
    },
    {
      title: 'Правило 4',
      body: 'относитесь к инструменту как к своей жене',
    }
  ]

  private linksCardsContents: TermCardContent[] = [
    {
      title: '<a href="https://www.instagram.com/startup_uralsk?igsh=Zmphdjc2OW5hdGo2" target="_blank"><img src="./images/icons8-instagram-50.png" style="height: 48px"></a>',
      body: 'Видеоблогинг в формате<br>life style.<br>Легкие и веселые видео, это сюда.',
      isPulsed: true,
    },
    {
      title: '<a href="https://youtube.com/@startup.uralsk?si=KT1V_3lOwnxXI3m-" target="_blank"><img src="images/icons8-youtube-50.png" style="height: 48px"></a>',
      body: 'Видеоблогинг сложных вопросов.<br>Миссия и ценности, стратегические цели, выполненные проекты и прочее',
      isPulsed: true,
    },
    {
      title: '<a href="https://t.me/ws_dedok" target="_blank"><img src="images/icons8-telegram-50.png" style="height: 48px"></a>',
      body: 'Хотите стать частью сообщества? Есть вопросы к нам? Хотите кооперации с другими участниками?<br> Эта группа создана для этого!',
      isPulsed: true,
    },
  ]

  renderContent() {
    return html`
      <!-- start of welcome -->
      <div class="content container padding-64">
        <h1>ДОБРО ПОЖАЛОВАТЬ</h1>
        <p>"Дедок" — это место, где встречаются люди разных профессий, чтобы творить, делиться опытом и вдохновляться друг другом. Здесь столяр может создавать изделия, мобилограф снимать процесс, а дизайнер превращать идеи в проекты. Все это происходит в атмосфере добровольного сотрудничества, где каждый получает радость от процесса, а синергия талантов рождает уникальные результаты.</p>

        <p>
          Технически "Дедок" — это <b>коворкинг мастерская</b>, уникальное пространство, которое сочетает в себе удобство совместной работы и профессионально оборудованную мастерскую. Мы создали это место, чтобы каждый мог сосредоточиться на своем деле и при этом быть частью сообщества.
        </p>

        ${html`<term-cards-widget .cards=${this.termCardsContents} ></term-cards-widget>`}

        <p>
        "Дедок" — это место, где вы можете творить ради удовольствия или зарабатывать своим мастерством. Здесь воплощаются идеи, рождается вдохновение и создается сообщество единомышленников. 
        </p>

        <p>Мы здесь, чтобы взять на себя организационные вопросы, чтобы вы могли сосредоточиться на творчестве.</p>

        <p><b>Добро пожаловать!</b> <br>Уверены, это пространство получится таким каким задумывается только вместе с вами!</p>

      <!-- end of welcome -->
      </div>

      <!-- start of working options -->
      <div class="black">
        <div class="content container padding-64">
          <h1>ВАРИАНТЫ СОТРУДНИЧЕСТВА</h1>

          <p>Наша коворкинг-мастерская это пространство возможностей и здесь любой человек может проявлять себя в одной из следующих (или нескольких) ролей.</p>

          ${html`<term-cards-widget
            .cards=${this.workOptionsCardsContents}
            .isBlack=${true}>
          </term-cards-widget>`}

          <p>Не забудьте изучить соответствующую роли вкладку, мы подготовили много интересных предложений! Независимо от того, какой путь сотрудничества вы выберете, мы рады, что вы с нами. </p>
        </div>
      <!-- end of working options -->
      </div>

      <!-- start of our rules -->
      <div class="content container padding-64">
        <h1>НАШИ ПРАВИЛА</h1>

        <p>Чтобы сотрудничество и взаимодействие всех участников процессов было легким и радостным давайте соблюдать установленные нами правила.</p>

        ${html`<term-cards-widget
          .cards=${this.rulesCardsContents}
          .columns=${4}
        </term-cards-widget>`}

        <p>Уверены, соблюдение этих несложных правил приведет к успеху и тебя и окружающих.</p>
      <!-- end of our rules -->
      </div>

      <!-- start of conclusion -->
      <div class="black">
        <div class="content container padding-64">
          <h1>В ЗАКЛЮЧЕНИЕ</h1>

          <p>Мы, коллектив коворкинг мастерской относимся к вам с доверием и заботой. Ожидаем от вас того же. Давайте преумножать ее в наших отношениях.</p>

          <h4>Держите связь с нами!</h4>

          ${html`<term-cards-widget
            .cards=${this.linksCardsContents}
            .isBlack=${true}>
          </term-cards-widget>`}
        </div>
      <!-- end of conclusion -->
      </div>
    `;
  }
}
