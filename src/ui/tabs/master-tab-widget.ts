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
      body: 'не нужно покупать абонемент, мастерская тебе всегда доступна',
    },
    {
      title: 'Предложение 2',
      body: 'организовывай работу как тебе удобно и с кем тебе удобно',
    },
    {
      title: 'Предложение 3',
      body: 'ты нам ничем не обязан, приходи и работай в удобное тебе время',
    },
    {
      title: 'Предложение 4',
      body: 'сделай так, чтобы и другие были рады твоей работе',
    },
  ]

  private workBalanceCardsContents: TermCardContent[] = [
    {
      title: '1. Мы',
      body: 'нам нравится наша работа',
    },
    {
      title: '2. Мы',
      body: 'мы создаем пространство и процесс, где каждый участник получит свою выгоду',
    },
    {
      title: '3. Мы',
      body: 'мы обязуемся стремиться к справедливости и эффективности',
    },
    {
      title: '1. Ты',
      body: 'тебе нравится твоя работа',
    },
    {
      title: '2. Ты',
      body: 'ты самостоятельно решаешь браться за определенный заказ или нет',
    },
    {
      title: '3. Ты',
      body: 'вместе с решением берешь обязательство его исполнить',
    },
  ]

  renderContent() {
    return html`
      <div class="content container padding-64">
        <h1>ОПЯТЬ НЕМНОГО ФИЛОСОФИИ</h1>

        <p>Ты нашел занятие которое приносит радость? А может даже ты мастер своего дела? Почему бы на этом не заработать?</p>

        <p>Но у нас особая философия (как же без нее) совместного зароботка. Важным аспектом является добровольное сотрудничество сторон, т.е. тебя, нас и вполне возможно других лиц.</p>

        <p>Фишка в том, что мы хотим создать возможность людям добровольно делать определенную работу и чтобы выигрывали все. Утопия? Такое невозможно? Вполне возможно что невозможно. Но все же, мы попробуем.</p>

        <blockquote>Иногда строить утопию лучше, чем <s>не строить ничего</s> строить обыденность</blockquote>
      </div>

      <div class="black">
      <div class="content container padding-64">
        <h1>УНИКАЛЬНОЕ ПРЕДЛОЖЕНИЕ МАСТЕРУ</h1>
        <h3>Наше предложение тебе</h3>

        ${html`<term-cards-widget
          .cards=${this.offerToMasterCardsContents}
          .isBlack=${true}
        </term-cards-widget>`}

        <h3>В чем <s>фишка</s> подвох?</h3>

        <p>Подвоха нет, это наша бизнес-модель. Все строится на нашем и твое выборе и ответственности:

        ${html`<term-cards-widget
          .cards=${this.workBalanceCardsContents}
          .isBlack=${true}
        </term-cards-widget>`}

        <blockquote>Наша цель: организовать пространство, где мастера оттачивают свое мастерство и зарабатывают на этом</blockquote>

        <h3>Как это работает?</h3>

        <master-work-flow-diagram></master-work-flow-diagram>

        <p>Шаг 2, очень важный в процессе. Тут определяются как расходы, так и участники сделки. Каждый участник получит свою долю от данного заказа.</p>

        <p><b>Пример 1.</b><br>
        Клиент на сайте с разработанным заранее каталогом, заказал кухонный набор в виде стола с шестью столами. Продавец принял заказ.<br>
        Кто участвует в этом заказе? Дизайнер-конструктор, продавец, smm, столяр. Вклад каждого участника важен для успеха текущей и будущих продаж. Перед выполнением заказа каждый участник должен знать и понимать какую долю от заказа он получит.<p>

        <p><b>Пример 2.</b><br>
        Столяр самостоятельно разработал наборы кухонной утвари и выполняет продажи в маркетплейсах.<br>
        В этом заказе все виды работ выполняет мастер-столяр и поэтому он единственный участник и выгодополучатель.<p>

        <p>Потенциально организовать производство может любой человек имеющий навыки столяра. Как пример: жена занимается продажами, а муж производством. При желании привлекаете мобилографа, дизайнера (хотяяя - для этого вроде и существуют жены).</p>

        <p>Комиссия мастерской - 10% от суммы заказа. Это базовая начальная ставка. В будущем по ходу развития возможны сдвиги в сторону уменьшения или увеличения.</p>

        <p>Каждый выполненный тобой заказ дает тебе туллпойнты которые можно потратить в течении 30 дней. Ставки будут еще определяться.</p>

        <h3>На что уходит ваша комиссия?</h3>

        <div class="list-container">
          <p>Глобально статей расходов два:</p>
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
        Лучше всего для продаж в маркетплейсах подходят массовые и несложные изделия типа кухонных досок или набор типа "Собери скворечник сам". Не ограничивай себя вышеприведенными примерами, включай воображение чтобы открылись возможности.</p>

        <blockquote>Возможности всегда: <b>безграничны, доступны и ждут когда ты их реализуешь</b></blockquote>

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
            <li>если скооперироваться с дизайнером(ами), то интересные заказы (и деньги) будут сами приходить</li>
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

        <blockquote>Если сегодня коворкинг был полезен для тебя, значит мы не зря прожили этот день</blockquote>
      <div>
      </div>
    `;
  }
}
