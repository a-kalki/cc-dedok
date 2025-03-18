import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TabContentWidget } from '../tab-content-widget';
import type { ImageContent, TermCardContent } from '../types';

@customElement('master-tab-widget')
export class MasterTabContentWidget extends TabContentWidget {
  imageSliderContents: ImageContent[] = [
    {
      src: './images/master_1.jpg',
      description: 'Зарабатывай на любимом занятии',
    },
    {
      src: './images/master_2.jpg',
      description: 'Сосредоточься на творчестве, остальное сделаем мы',
    },
    {
      src: './images/master_3.jpg',
      description: 'Дари людям радость и красоту изделий',
    },
    {
      src: './images/master_4.jpg',
      description: 'Находи партнеров для сложных проектов',
    },
    {
      src: './images/master_5.jpg',
      description: 'Мы создаем возможности, ты — результат',
    },
    {
      src: './images/master_6.jpg',
      description: 'Множество проектов ждут твоей реализации',
    },
  ]

  private offerToMasterCardsContents: TermCardContent[] = [
    {
      title: 'Предложение 1',
      body: 'мастерская всегда доступна тебе бесплатно',
    },
    {
      title: 'Предложение 2',
      body: 'приходи и работай в удобное тебе время',
    },
    {
      title: 'Предложение 3',
      body: 'организовывай работу как тебе удобно и с кем тебе удобно',
    },
    {
      title: 'Условие 1',
      body: 'сделай так, чтобы и другие были рады твоей работе',
    },
  ]

  renderContent() {
    return html`
      <div class="content container padding-64">
        <h1>ОПЯТЬ НЕМНОГО ФИЛОСОФИИ</h1>

        <p>Ты нашел занятие которое приносит радость? А может даже ты мастер своего дела? Почему бы на этом не заработать?</p>

        <p>Но у нас особая философия (как же без нее) совместного зароботка. Важным аспектом является добровольное сотрудничество сторон, т.е. тебя, нас и вполне возможно других лиц.</p>

        <p>Фишка в том, что мы хотим создать место где: <b>люди добровольно выполняют свою работу и при этом выигрывают все</b>. Утопия? Такое невозможно? Вполне возможно что невозможно. Но все же, мы попробуем.</p>

        <blockquote>Иногда строить утопию лучше, чем строить обыденность</blockquote>
      </div>

      <div class="black">
      <div class="content container padding-64">
        <h1>УНИКАЛЬНОЕ ПРЕДЛОЖЕНИЕ МАСТЕРУ</h1>
        <h3>Наше предложение тебе</h3>

        ${html`<term-cards-widget
          .cards=${this.offerToMasterCardsContents}
          .isBlack=${true}
          .columns=${4}
        ></term-cards-widget>`}

        <h3>В чем <s>фишка</s> подвох?</h3>

        <p>Подвоха нет, это наша бизнес-модель. Все строится на нашем и твоем выборе и ответственности:

        <ul>
          <li><u>наш выбор и ответственность</u></li>
          <ul>
            <li>нам нравится наша работа</li>
            <li>мы создаем пространство, где каждый получит свою выгоду</li>
            <li>мы обязуемся стремиться к справедливости и эффективности</li>
          </ul>
          <li><u>твой выбор и ответственность</u></li>
          <ul>
            <li>тебе нравится твоя работа</li>
            <li>ты самостоятельно решаешь браться за заказ или нет</li>
            <li>ты вместе с решением берешь обязательство его исполнить</li>
          </ul>
        </ul>

        <blockquote>Наша цель: организовать пространство, где мастера оттачивают свое мастерство и зарабатывают на этом</blockquote>

        <h3>Как это работает?</h3>

        <master-work-flow-diagram></master-work-flow-diagram>

        <p>Как видно, начало работы может быть разным. В первом случае заказ поступает в коворкинг-мастерскую, во втором ты можешь придти со своим заказом.</p>
        <p>Шаг 2, очень важный в процессе. Тут определяются как расходы, так и участники сделки. Каждый участник получит свою долю от данного заказа.</p>

        <p><b>Пример 1.</b><br>
        Клиент на сайте с разработанным заранее каталогом, заказал кухонный набор в виде стола с шестью стульями. Продавец принял заказ.<br>
        Кто участвует в этом заказе? Дизайнер-конструктор, продавец, smm, столяр. Вклад каждого участника важен для успеха текущей и будущих продаж. Перед выполнением заказа каждый участник должен знать и понимать какую долю от заказа он получит.<p>

        <p><b>Пример 2.</b><br>
        Столяр самостоятельно разработал наборы кухонной утвари и выполняет продажи в маркетплейсах.<br>
        В этом заказе все виды работ выполняет мастер-столяр и поэтому он единственный участник и выгодополучатель.<p>

        <p>Потенциально организовать производство может любой человек имеющий навыки столяра. Как пример: жена занимается продажами, а муж производством. При желании привлекаете мобилографа, дизайнера (хотяяя - для этого вроде и существуют жены).</p>

        <h3>Взаимоотношения с мастерской</h3>

        <p>Комиссия мастерской - 20% от суммы заказа.</p>

        <p>Для новых мастеров действует специальная акция: за первые три заказа комиссия мастерской 10%.</p>

        <div class="list-container">
          <p>Вы можете уменьшить стоимость комиссии до:</p>
          <ul>
            <li>17% - если будете вести reels, storis в своей страничке;</li>
            <li>14% - если будете снимать и выкладывать процесс работы над проектом с текстовыми описаниями;</li>
            <li>10% - если будете снимать и выкладывать обучающие видео с вашими устными комментариями работы над проектом;</li>
          </ul>
          <p>Требования к публикации более подробно описаны в страничке "Хоббист".</p>
        </div>

        <p>Каждый выполненный тобой заказ дает тебе туллпойнты которые можно потратить в течении 30 дней. Ставки будут еще определяться.</p>

        <h3>На что уходит ваша комиссия?</h3>

        <div class="list-container">
          <p>Глобально статей расходов у нас два:</p>
          <ol>
            <li>Поддержание и развитие текущей коворкинг мастерской</li>
            <li>Развитие сети коворкингов</li>
          </ol>
        </div>

        <blockquote>Каждый выполненный тобой заказ делает мир лучше. Ты даришь миру новое изделие и потенциально новые коворкинг-мастерские</blockquote>
      </div>
      </div>

      <div class="content container padding-64">
        <h1>НАПРАВЛЕНИЯ БИЗНЕС ЗАРОБОТКА</h1>
        <h3>Маркетплейсы</h3>

        <p><b>Товар:</b><br>
        Лучше всего для продаж в маркетплейсах подходят массовые и несложные изделия типа кухонных досок или набор типа "Собери скворечник сам". Не ограничивай себя вышеприведенными примерами, включай воображение.</p>

        <blockquote>Возможности всегда: безграничны, доступны и ждут когда ты их реализуешь</blockquote>

        <div class="list-container">
          <p><b>Плюсы:</b></p>
          <ol>
            <li>минимум расходов и навыков на маркетинг, но нужна стратегия по привлечению первых клиентов</li>
            <li>можно начинать бизнес с минимальными навыками мастера</li>
          </ol>
        </div>

        <div class="list-container">
          <p><b>Минусы:</b></p>
          <ol>
            <li>требует первоначальный капитал для закупа материалов и старта в маркетплейсе</li>
            <li>нужно заранее заготовить много продукции</li>
            <li>мало творческой составляющей по сравнению с другими направлениями</li>
          </ol>
        </div>

        <h3>Сложные изделия</h3>

          <p><b>Товар:</b><br>
          Классическим товаром в этом случае является товары премиум класса, например мебель из массива дерева. Продажи скорее всего тоже будут классическими: сайт, соцсети, сарафанное радио...</p>

        <div class="list-container">
          <p><b>Плюсы:</b></p>
          <ol>
            <li>работа более творческая, ставящая перед мастером вызов</li>
            <li>работа как правило происходит после предоплаты, это частично или полностью покроет расходы на изготовление изделия</li>
            <li>больше дохода за еденицу изделия</li>
          </ol>
        </div>

        <div class="list-container">
          <p><b>Минусы:</b></p>
          <ol>
            <li>более требовательна к мастерству мастера</li>
            <li>может потребовать сотрудничества с другими специализациями</li>
            <li>более сложна в организации</li>
          </ol>
        </div>

        <h3>Дизайн интерьеров</h3>

        <p><b>Товар:</b><br>
        Окончательный результат интерьера в соответствии с дизайн проектом. Например: "стол из слеба встроенный в подоконник".</p>

        <div class="list-container">
          <p><b>Плюсы:</b></p>
          <ol>
            <li>самая творческая работа, каждый раз дизайнеры будут подкидывать новые идеи для реализации</li>
            <li>работа происходит по предоплатной системе, есть покрытие стартовых расходов</li>
            <li>если скооперироваться с дизайнером(ами), то интересные заказы (и деньги) будут приходить сами</li>
          </ol>
        </div>

        <div class="list-container">
          <p><b>Минусы:</b></p>
          <ol>
            <li>требует самой высокой степени квалификации мастера</li>
            <li>требует много ресурсов на "вхождение" в требования заказа и поиск решений</li>
            <li>промежуточные результаты нужно согласовывать с дизайнером и клиентом</li>
            <li>работа заканчивается на территории клиента</li>
          </ol>
        </div>

      </div>

      <div class="black">
      <div class="content container padding-64">
        <h1>ДЛЯ ЧЕГО ВЕСЬ ДВИЖ?</h1>

        <p>Если изучаешь сайт последовательно, то когда-то, в далеком прошлом, в то время когда ты изучал вкладку "Хоббист" были сказаны громкие слова: <b>"Этим бизнесом мы хотим дарить людям счастье"</b>.</p>

        <blockquote>Дарить людям счастье - это не просто слова, это смысл существования этого бизнеса</blockquote>

        <blockquote>И в то же время, это всегo лишь слова. Ибо счастье не дарится, а добывается</blockquote>

        <blockquote>Если коворкинг полезен для тебя, значит мы не зря прожили этот день</blockquote>
      <div>
      </div>
    `;
  }
}
