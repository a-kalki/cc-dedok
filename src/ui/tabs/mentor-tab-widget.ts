import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TabContentWidget } from '../tab-content-widget';
import type { ImageContent, TermCardContent } from '../types';

@customElement('mentor-tab-widget')
export class MentorTabContentWidget extends TabContentWidget {
  imageSliderContents: ImageContent[] = [
    {
      src: './images/mentor_1.jpg',
      description: 'Делись своим опытом, вдохновляй других',
    },
    {
      src: './images/mentor_2.jpg',
      description: 'Покажи путь тем, кто только начинает',
    },
    {
      src: './images/mentor_3.jpg',
      description: 'Передавай знания, оставляя след в мире',
    },
    {
      src: './images/mentor_4.jpg',
      description: 'Твое мастерство способно изменить чью-то жизнь',
    },
    {
      src: './images/mentor_5.jpg',
      description: 'Влюбляй людей в свою профессию',
    },
  ]

  private masterClassMotivationsCardsContents: TermCardContent[] = [
    {
      title: 'Мотивация 1',
      body: 'попробовать что то новое',
    },
    {
      title: 'Мотивация 2',
      body: 'интересно провести время, потусить',
    },
    {
      title: 'Мотивация 3',
      body: 'узнать: "это мое или не мое!"',
    },
    {
      title: 'Мотивация 4',
      body: 'сделать подарок своими руками',
    },
    {
      title: 'Мотивация 5',
      body: 'научиться секретам работы с определенным инструментом;',
    },
  ]

  private courseMotivationsCardsContents: TermCardContent[] = [
    {
      title: 'Мотивация 1',
      body: 'войти в ремесло (профессию)',
    },
    {
      title: 'Мотивация 2',
      body: 'узнать секреты мастеров',
    },
    {
      title: 'Мотивация 3',
      body: 'сделать классное и сложное изделие',
    },
    {
      title: 'Мотивация 4',
      body: 'быть частью сообщества',
    },
  ]

  renderContent() {
    return html`
      <div class="content container padding-64">
        <h1>РАЗВИВАТЬ ЛЮДЕЙ</h1>

        <p>Ты проделал долгий путь и стал профессионалом. Тебе есть что рассказать и показать. И есть желание это делать. Тогда эта страница для тебя.</p>

        <p>Эта страница будет не большой, потому что бизнес-модель будет такой же как и для Мастеров. Разница только в продоваемом товаре.</p>
        <ul>
          <li>Мастера продают готовые физические изделия</li>
          <li>Менторы продают знания и навыки</li>
        </ul>

        <p>Нам не  нравится разговаривать на бизнес языке, более приятно разговаривать на человеческом языке, потому позволь нам переопределить их:</p>
        <ul>
          <li>Мастера через свою работу дарят миру красоту и комфорт</li>
          <li>Менторы через свои знания и навыки влюбляют людей в свое ремесло</li>
        </ul>

        <p>Тебе может нравится любое из этих определений. Если для этого нужна коворкинг мастерская, то она для этого и существует.</p>

        <blockquote>Развивать людей - пожалуй нет дела более благородного и достойного</blockquote>

        <h3>Направления</h3>
        <p><b>Мастер-класс</b> - это мероприятие в котором в течении 3-6 часов люди могут получить определенный результат (изделие).</p>

        <p>Почему клиенты выбрают мастер-классы?</p>
        ${html`<term-cards-widget
          .cards=${this.masterClassMotivationsCardsContents}
          .isBlack=${true}
        </term-cards-widget>`}

        <p><b>Курс</b> - это последовательность уроков для реализациии среднего или крупного проекта. В ходе него Ментор "ведет" студентов и помогает пройти все сложности проекта.

        <p>Во вкладке "Хоббист" мы рассказывали про <b>шаги узнавания себя</b>. В большинстве случаев, препятствием для получения навыков являтеся второй и третий шаг. В преодолении трудностей второго шага помогаем мы, коворкинг мастерская. А третьего - ты, ментор.</p>

        <blockquote>Иногда хватает одной ошибки, чтобы опустились руки и проект был заброшен, задача ментора провести через эти рифы жизни</blockquote>

        Почему клиенты выбирают курсы?
        ${html`<term-cards-widget
          .cards=${this.courseMotivationsCardsContents}
          .isBlack=${true}
        </term-cards-widget>`}
      </div>

      <div class="black">
      <div class="content container padding-64">

        <h1>Чуть чуть спойлера</h1>
        <p>Во вкладке "Партнер" ты можешь изучить куда мы планируем развиваться. И чтобы тебе не бегать туда сюда, раскроем немного своих планов здесь.</p>

        <ul>
          <li>данный сервис коворкинга будет масштабироваться по модели франшизы</li>
          <li>параллельно данному коворкингу будет развиваться сервис (приложение)</li>
        </ul>

        <p style="font-size: 14px"><u>Примечание:</u> все несколько сложнее и интереснее, но в сути вышесказанное верно.</p>

        <p>В приложении будет возможность загружать свои мастер-классы и курсы. Это открывает новые возможнсти делиться своим опытом и знаниями, а соответственно монетизировать их.</p>

        <p>Это перед обой открывает две возможности:</p>
        <ol>
          <li>готовить программу мастер-классов (курсов) и делиться ими с другими Менторами.</li>
          <li>проводить мастер-классы (курсы) подготовленные другими Менторами</li>
        </ol>

        <p>За каждый проведенный мастер-класс (курс) по подготовленной программе, автор получает свою комиссию.</p>
        <p>Эта же модель будет работаь с моделями, дизайн-проектами и всем чем можно делиться через современные технологии.</p>

        <p>Если идея интересна, то во вкладке "Партнеры" найдешь ссылки на видеопрезентации с более расширенной информацией.</p>
      </div>
      </div>
    `;
  }
}
