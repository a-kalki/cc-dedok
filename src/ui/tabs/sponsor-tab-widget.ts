import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TabContentWidget } from '../tab-content-widget';
import type { ImageContent, TermCardContent } from '../types';

@customElement('sponsor-tab-widget')
export class SponsorTabContentWidget extends TabContentWidget {
  imageSliderContents: ImageContent[] = [
    {
      src: './images/sponsor_1.jpg',
      description: 'Стань частью большого дела',
    },
    {
      src: './images/sponsor_2.jpg',
      description: 'Делать мир лучше не так уж сложно',
    },
    {
      src: './images/sponsor_3.jpg',
      description: 'Маленькая помощь — большие перемены',
    },
    {
      src: './images/sponsor_4.jpg',
      description: 'Каждое решение как то влияет на мир',
    },
    {
      src: './images/sponsor_5.jpg',
      description: 'Это предложение тоже возможность',
    },
  ]

  private donatCardsContents: TermCardContent[] = [
    {
      title: 'Вывод 1',
      body: 'создание этого бизнеса свидетельствует: "мы уже обладаем счастьем"',
    },
    {
      title: 'Вывод 2',
      body: 'вполне возможно ты им тоже обладаешь и хочешь поучаствовать в нашем движе',
    },
    {
      title: 'Вывод 3',
      body: 'один из реальных способов преумножения счастья через наш бизнес — донат',
    },
  ]

  renderContent() {
    return html`
      <div class="content container padding-64">
        <h1>ВВЕДЕНИЕ</h1>

        <p>Эта страница нацелена чтобы ты поддержал нас финансово, т.е. стал нашим спонсором.</p>

        <p>У тебя также может возникнуть вопрос: "Зачем помогать, если вы такие хорошие и успешные?". Ниже мы постараемся дать исчерпывающий ответ.</p>

        <h3>Причина 1. Исторические и текущие обстоятельства</h3>

        <div class="list-container">
          <p>Все что ты изучил в предыдущих страницах, это не сочинение, все написанное основано на опыте жизни. До этого момента пройден определенный путь. В цифрах это будет звучать так:</p>
          <ul>
            <li>6 лет;</li>
            <li>4 стартапа;</li>
            <li>0 удач;</li>
            <li>0 тенге заработка;</li>
            <li>порядка 200 000$ убытков;</li>
          </ul>

          <p>Эти цифры могут вызвать два противоположно-направленных мыслей:
          <ul>
            <li>это неудачники, если дам денег они точно также продуют мои деньги;</li>
            <li>у них большой опыт - это повышает шансы на успех;</li>
          </ul>
          
          <p>Если мы выложили эти цифры на всеобщее обозрение, то думаю несложно догадаться к какому лагерю мы относимся.<br>
          Да, мы ничуть не стыдимся, а гордимся пройденным путем и <s>своими неудачами</s> своим опытом.<br>
          Этими цифрами мы также сообщаем: <b>"Ваша помощь будет очень кстати для нашего становления"</b>.</p>

          <p>Сможем ли мы самостоятельно вырасти в полноценный бизнес без внешней помощи? Определенно да. Только этот путь будет несколько дольше и сложнее.<br>

          <blockquote>Зачем усложнять Жизнь, когда есть более простые пути?</blockquote>
          
          <p>Попросить помощи для нас ничуть не зазорно, тем более мы рассматриваем это не как просьбу, а как предложение. Деловое предложение. Выгоду получите и вы.</p>

          <h3>Причина 2. Преумножая команду.</h3>

          <p>Мы рассматриваем финансовую помощь только в форме доната. Т.е. человек сам определяет хочет ли он помочь и сколько хочет выделить средств. В чем твоя выгода? Читай ниже.</p>

          <p>Если ты разделяешь ценности и устремления этого бизнеса и хочешь чтобы оно воплотилось, то твой донат это отличная возможность проявить это в действиях.</p>

          <p>Мы считаем: "Каждый кто делает поддержку (лайки, репосты, донаты, сарафанное радио, комменты...), является частью нашей команды".</p>

          <p>Не хотим разделять, но все же не можем не отметить: "Финансовая поддержка, самый яркий показатель приверженности ценностям команды и вовлеченности к достижению его успеха".</p>

          <p>В мире стартапов есть термин "Бизнес-ангел", это люди которые финансируют идеи стартаперов. Проще говоря это бизнес спонсоры которые делают это быстро и просто. Мотивация: "чтобы получить финансовую выгоду от потенциального успеха".</p>

          <p>Если ты поддержишь нас, то мотивацией является не финансовая выгода, а что то более глубокое и важное.</b>

          <blockquote>Бескорыстная помощь - вот кто истинный носитель титула БИЗНЕС АНГЕЛ</blockquote>

          <p>Наше предложение: <b>"Сделай свой вклад, стань нашим бизнес-ангелом"</b>. Размер доната - на твое усмотрение, руководствуйся своим сердцем и здравым смыслом.</p>

          <h3>Причина 3. Преумножая счастье</h3>

          <p>Мы, в предыдущих страницах много говорили про <b>СЧАСТЬЕ</b>, отмечая, что ее преумножение основная <s>цель</s> идея бизнеса.</p>

          <p>Вся идея исходит из двух основополагающих утверждений:</p>

          <blockquote>Утверждение 1. Только счастливый человек может делать счастливым других</blockquote>

          <blockquote>Утверждение 2. Когда создаешь счастье для других он приумножается и в тебе</blockquote>

          Из этого следует:
          ${html`<term-cards-widget
            .cards=${this.donatCardsContents}
            .isBlack=${true}
          </term-cards-widget>`}

          <p>Переходя на бизнес язык, делаем тебе такое деловое предложение: <b>"Если у тебя есть счастье и ты хочешь ее преумножить, то ниже мы подготовили реквизиты чтобы дать тебе эту возможность"</b>.</p>

          <p style="font-size: 14px">Ух, как лихо мы закрутили чтобы залезть к тебе в кошелек. Попахивает мошеничеством, тебе так не кажется??? 😆</p>
        </div>
        

      </div>>

      <div class="black">
      <div class="content container padding-64">
        <h1>ЗАКЛЮЧЕНИЕ</h1>

        <h3>Кошельки для счастья:</h3>
        <div class="list-container">
          <p class="list-container"><b>Visa: </b><code>4400 4302 6284 6204</code></p>
          <p class="list-container"><b>Kaspi: </b><code>4400 4302 6284 6204</code></p>
          <p class="list-container"><b>Swift:</b></p>
          <ul class="list-container">
            <li><code>Амангалиев Нурболат Зинелгалиевич</code></li>
            <li><code>АО Kaspi Bank, Республика Казахстан, г.Уральск</code></li>
            <li><code>CASPKZKA</code></li>
            <li><code>KZ87722C000042404372</code></li>
          </ul>
          <p class="list-container"><b>МИР: </b><code>скоро будет!</code></p>
          <p class="list-container"><b>telegram-wallet (USDT TON): </b><code>UQABdQi0weUwU5Mttrric-oyLr50du-NhS1oupySezn-3IHV</code></p>
        </div>

        <h3>Благодарности:</h3>

        <p>Мы верим что все вернется в стократ, но не можем не поблагодарить:</p>
        <ul>
          <li>Şükran (Шукран) - Azərbaycan (Азербайджан)</li>
          <li>Շնորհակալություն (Шноракалутюн) - Հայաստան (Армения)</li>
          <li>Дзякуй (Дзякуй) - Беларусь (Белоруссия)</li>
          <li>გმადლობთ (Гмадлобт) - საქართველო (Грузия)</li>
          <li>Рақмет (Рахмет) - Қазақстан (Казахстан)</li>
          <li>Рахмат (Рахмат) - Кыргызстан (Киргизия)</li>
          <li>Ačiū (Ачю) - Lietuva (Литва)</li>
          <li>Paldies (Палдес) - Latvija (Латвия)</li>
          <li>Mulțumesc / Mersi (Мулцумеск / Мерси) - Moldova (Молдавия)</li>
          <li>Спасибо (Спасибо) - Россия (Россия)</li>
          <li>Sag bol (Саг бол) - Türkmenistan (Туркмения)</li>
          <li>Ташаккур (Ташаккур) - Тоҷикистон (Таджикистан)</li>
          <li>Дякую (Дякую) - Україна (Украина)</li>
          <li>Rahmat (Рахмат) - Oʻzbekiston (Узбекистан)</li>
          <li>Tänan (Танан) - Eesti (Эстония)</li>
        </ul>
      </div>
      </div>
    `;
  }
}
