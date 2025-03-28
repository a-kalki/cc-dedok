import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TabContentWidget } from '../tab-content-widget';
import type { ImageContent, TermCardContent } from '../types';

@customElement('hobbist-tab-widget')
export class HobbistTabContentWidget extends TabContentWidget {
  imageSliderContents: ImageContent[] = [
    {
      src: './images/hobbist_1.jpg',
      description: 'Все необходимое здесь, нужен только ты',
    },
    {
      src: './images/hobbist_2.jpg',
      description: 'Созидай своими руками',
    },
    {
      src: './images/hobbist_3.jpg',
      description: 'Начни свой путь к мастерству',
    },
    {
      src: './images/hobbist_4.jpg',
      description: 'Открывай в себе новые грани',
    },
    {
      src: './images/hobbist_5.jpg',
      description: 'Заводи новые знакомства',
    },
  ]

  private selfRecognitionCardsContents: TermCardContent[] = [
    {
      title: '1. Отклик в сердце',
      body: 'При мысли о занятии появляется ресурс реализовать (мотивация, желание).',
    },
    {
      title: '2. Организация',
      body: 'Решаешь все сопутствующие реализации вопросы.',
    },
    {
      title: '3. Реализация',
      body: 'Делаешь и слушаешь себя:<br>нравится или нет?',
    },
    {
      title: '4. Результаты',
      body: 'Получение ответа.<br>Лучшее узнавание себя.',
    },
    {
      title: '5. Выбор',
      body: 'Продолжаю или нет?',
    },
  ]

  private stepThinksCardsContents: TermCardContent[] = [
    {
      title: 'Мысль 1',
      body: 'Нужно купить сварочный аппарат<br>(или взять в аренду?)',
    },
    {
      title: 'Мысль 2',
      body: 'И докупить все остальное<br>(трубы, электроды, маска, магнитный зажим)',
    },
    {
      title: 'Мысль 3',
      body: 'Где бы организовать рабочее место?<br>(не во дворе же 9-этажки!)',
    },
    {
      title: 'Мысль 4',
      body: 'А вдруг не будет получаться?<br>(youtube наверное поможет)',
    },
    {
      title: 'Мысль 5',
      body: 'Деньги, время, силы...<br><b>А стоит игра свеч?</b><br>(наверное нет)',
    },
    {
      title: 'Мысль 6',
      body: '<b>Но ведь охота!!!</b><br>(будь реалистом,<br>не гоняйся за желаниями)',
    },
  ]

  private priceCardsContents: TermCardContent[] = [
    {
      title: '1 час',
      body: '<b>1000 тенге.</b><br>Если нужно что то быстро отремонтировать',
    },
    {
      title: '3 часа',
      body: '<b>2000 тенге.</b><br>Если нужно отремонтировать, но нужно больше времени',
    },
    {
      title: '1 день',
      body: '<b>5000 тенге.</b></br>Для маленьких проектов.</br>(тариф действует до закрытия мастерской)',
    },
    {
      title: '1 неделя',
      body: '<b>10000 тенге.</b></br>Если у тебя есть средний проект.<br>(7 календарных дней)',
    },
    {
      title: '1 месяц',
      body: '<b>30000 тенге.</b></br>Если у тебя есть проект(ы) и не хочешь быть ограниченным во времени.<br>(30 календарных дней)',
    },
  ]

  renderContent() {
    return html`
      <div class="content container padding-64">
        <h1><s>НЕМНОГО ФИЛОСОФИИ</s></h1>
        <h1>ИДЕЯ БИЗНЕСА</h1>

        <p><s>Философия</s>Идея бизнеса очень проста: <b>мы помогаем людям становиться счастливыми</b>.</p>

        <p>В глубине души можно заметить: <b>счастливыми нас делает — занятия любимым делом</b>.</p>

        <p>Соответственно наша задача: <b>дать тебе возможность найти то, что делает тебя счастливым</b>.</p>

        <p>Вот и вся <s>философия</s> идея! 😎</p>

        <blockquote>"Тоже мне идея. Каждый бизнес зарабатывает на идее делать людей счастливыми" - скажешь ты и будешь прав, но...</blockquote>

      </div>

      <div class="black">
      <div class="content container padding-64">
        <h1>ХОББИ<br>ЭТО ПОИСК НАСТОЯЩЕГО СЕБЯ</h1>

        <p>Как было отмечено сверху, нас делает счастливым <b>делание</b>. Это называют <b>созиданием</b> или <b>творением</b>.<br>
        Мы глубоко уверены что это заложено в каждом человеке. Наша деятельность направлена на то, чтобы раскрыть этот скрытый потенциал в человеке.</p>

        <blockquote>Узнавая какое занятие нравится, начинаем узнавать себя.</blockquote>

        <p>Нет другого способа узнать, нравится занятие или нет, кроме как попробовать. Но чтобы пробовать, нужны соответствующие обстоятельства.</p>

        <h3>Алгоритм (шаги) узнавания себя:</h3>

        ${html`<term-cards-widget
          .cards=${this.selfRecognitionCardsContents}
          .isBlack=${true}>
        </term-cards-widget>`}

        <p>Как правило второй шаг, вопрос организации самый тормозящий, к примеру:<br>
        У тебя есть желание попробовать заняться сваркой (первый шаг пройден, отклик есть). Тогда нужно решить вопросы второго шага и внутри появится диалог:</p>

        ${html`<term-cards-widget
          .cards=${this.stepThinksCardsContents}
          .isBlack=${true}>
        </term-cards-widget>`}

        <p><b>Наверняка тебе это знакомо!</b> Именно для решения этих организационных проблем существуем мы.</p>

        <p><u>Наша цель:</u> собрать и организовать все необходимое, чтобы помочь тебе найти <b>свое</b> занятие (или наоборот узнать: "<b>это точно не мое</b>").</p>

        <blockquote>Узнать что не мое, так же важно как и узнать что мое</blockquote>

        <p>В итоге, идею можно переформулировать: <b>"Мы помогаем найти свое занятие и помогаем заниматься им!"</b></p>
      </div>
      </div>

      <div class="content container padding-64">
        <h1>ПЕРЕСЕЧЕНИЕ ХОББИ</h1>
          <p>Есть у тебя знакомые которые обучились такой специальности как мобилограф? А может тебе нравится фотографировать людей? Или того хуже: рисовать <s>портреты</s> сюжеты!</p>

          <p>Уверен, есть много людей которые хотят развиваться в этих направлениях. Причем тут коворкинг-мастерская?</p>

          <p>А при том, что эти люди тоже могут оттачивать свое мастерство в нашей коворкинг-мастерской. Ведь тут работают люди, и мобилограф может учиться своему ремеслу снимая как они работают, или сделать таймлапс большого проекта: "Рождение дубового кухонного стола от А до Я руками рукожопа". Фотографам, художникам и другим специализациям при желании тоже можно найти способы саморазвития и самореализации.
          
          <blockquote>Будет желание и воображение, откроются и соответствующие возможности</blockquote>

          <h3>Каким мы видим это место?</h3>

          <p>
            "Дедок" — это место, где встречаются люди разных профессий, чтобы творить, делиться опытом и вдохновляться друг другом. Здесь столяр может создавать изделия, мобилограф снимать процесс, а дизайнер превращать идеи в проекты. Все это происходит в атмосфере добровольного сотрудничества, где каждый получает радость от процесса, а синергия талантов рождает уникальные результаты (© chatgpt).
          </p>

          <p>Нами движет идея <b>объединения творческих людей и тогда должно появиться <s>общение-печенье</s> сообщество</b>. На наш взгляд объединение людей с общими ценностями тоже должно способствовать увеличению счастья.</p>

        <p>Но как бы не были хороши наши прекрасные, тонко-идеалистические помыслы: <b>мы живем в довольно грубом и жестком мире реальности. В мире, где прекрасные идеи не накормят твоих детей</b>.</p>

        <p>Поэтому, мы подходим к <s>главному</s> важному, к тому чтобы: <b>выставить счет за возможность познания счастья!</b></p>

        <p><u>Примечание:</u> платно только доступ к инструментам и рабочим местам. Мобилографы и художники, вы работаете в нашем пространстве бесплатно по договоренности с хоббистом.</p>
      </div>

      <div class="black">
      <div class="content container padding-64">
        <h1>ПОЧЕМ НЫНЧЕ СЧАСТЬЕ???</h1>

        <h3>А сколько счастья тебе отсыпать?</h3>

        ${html`<term-cards-widget
          .cards=${this.priceCardsContents}
          .isBlack=${true}>
        </term-cards-widget>`}
      </div>
      </div>

      <div class="content container padding-64">
        <h1>ЧТО ВХОДИТ В СЧАСТЬЕ?</h1>

        <h3>За эту плату ты получшь!</h3>

        <ol>
          <li>Одно рабочее место размером: 60х120 см (половина стола 120х120 см).</li>
          <li>Доступ ко всем ручным инструментам.</li>
          <li>Доступ ко всем ручным электроинструментам.</li>
          <li>Доступ к следующим станкам:
            <ol>
              <li>Все виды шлифовальных станков.</li>
              <li>Ленточнопильный станок.</li>
              <li>Сверлильный станок.</li>
            </ol>
          </li>
          <li>Советы и помощь инструктора мастерской.</li>
          <li>Нашу благодарность и любовь (впрочем, ее можно получить бесплатно).</li>
        </ol>

        <h3>Дополнительно</h3>

        <p>За дополнительную опцию "Оснастка", ты можешь использовать расходники и оснастку которые есть в мастерской (сверла, фрезы, лезвии, саморезы и пр.).</p>
        <ul>
          <li>дневной и почасовой абонемент 1000 тенге</li>
          <li>недельный или месячный абонемент 2000 тенге</li>
        </ul>

        <p> Не нужно покупать данную опцию если например ты пришел поработать на 3 часа и тебе нужно 10 саморезов, или пару раз пройтись одной фрезой.</p>

        <p>Опция будет полезна когда у тебя средний или крупный проект и сложно заранее понять что из оснастки понадобится. Опция позволит не бегать за каждой мелочью. А мы в свою очередь за эти деньги постараемся обеспечить самой разнообразной оснасткой для быстрой, комфортной и качественной работы.</p>

        <p>Пользуйся опцией в здравых пределах. Если у тебя крупный проект, тебе нужно много саморезов или собираешься много работать определенной фрезой, то лучше купи их отдельно.</p>

        <h3>Важно 1!</h3>

        <p>При небезопасной работе и/или небрежном обращении с инструментами мы вправе лишить тебя доступа к ним.</p>

        <p>Более того, при не соблюдении наших правил мы вправе лишить тебя права пользоваться услугами нашей мастерской.<br>
        С правилами ты можешь ознакомиться в разделе "Главное" данного сайта.</p>

        <p>Ты можешь получить доступ к более опасным и сложным станкам, при соблюдении обеих условии:</p>
        <ul>
          <li>пройдешь мастер-класс или курс обучения с инструкцией по безопасности для определенного станка (инструмента)</li>
          <li>своей работой вызываешь у нас доверие и принятие решения о доступе к опасному и/или сложному (дорогому) оборудованию</li>
        </ul>

        <h3>Важно 2!</h3>
        <p>Ты имеешь право приносить свои материалы для работы над своими проектами, но с соблюдением правила приведенного ниже.</p>

        <p>Использование материалов бывших в употреблении запрещается! Если все же хочешь исключения для себя, то согласуй вопрос с мастером-инструктором (ответственным за мастерскую).</p>

        <p>Так же тебе необходимо согласовать с мастером-инструктором применение материалов долго лежавших в открытой местности (грязных, запылившихся).</p>

        <p>Это необходимо для исключения повреждения дорогого оборудования и оснастки (например строганием бруса с гвоздями или досок использованных в качестве опалубки).</p>

        <p>При нарушении правила штрафные санкции будут на усмотрение мастера-инструктора.</p>

      </div>


      <div class="black">
      <div class="content container padding-64">
        <h1>ПЛЮШКИ ДЛЯ БОЛЬШЕГО СЧАСТЬЯ</h1>

        <h3>Плюшка №1: уменьшаем стоимость</h3>

        <div class="list-container">
          <p>Ты можешь уменьшить стоимость абонемента проявляя активность в соцсетях:</p>
          <ul>
            <li>3 000 тенге: сними и опубликуй в своей страничке reels, storis работы в коворкинг мастерской. Формат публикации: я это делаю своими руками, вы тоже можете это сделать, т.е. мотивирующее;</li>
            <li>6 000 тенге: сними и опубликуй в своей страничке полный процесс работы над своим проектом. Добавляй в видео текстовые комментарии о процессе, операциях работы: "фрезеруем пазовой фрезой", "шлифуем перед покраской". Формат публикации: мотивирующий, поясняющий;</li>
            <li>10 000 тенге: сними и опубликуй в своей страничке видео процесса работы с твоими устными комментариями: цель, проблемы, приемы, решения и прочее. Формат публикации: мотивирующий, поясняющий, обучающий;</li>
          </ul>
        </div>


        <p>Количество публикации неограничено, т.е. стоимостные значения ваших публикации будут складываться. Но для этого вам нужно будет их предъявить перед оплатой.</p>

        <div class="list-container">
          <p><b>Условия:</b></p>
          <ul>
            <li>на всем протяженни видео необходимо указать: Коворкинг-мастерская "Дедок";</li>
            <li>в описании видео указать, что проект был выполнен в коворкинг мастерской и дать информацию и/или ссылки на нее.</li>
          </ul>
        </div>

        <h3>Плюшка №2: получаем бесплатные пряники</h3>
        <p>Жизненная ситуация: нужно провести электропроводку на балкон, для этого хорошо бы иметь соответствующие этой работе инструменты (индикатор, стриппер, кримпер, бокорез...). Знакомо?<br>
        Для решения таких жизненных задач, нами запускается еще одна инициатива.</p>

        <p>В бизнесе будет отдельная категория инструментов которые можно забирать за пределы мастерской (домой). Для этого тебе на балансе необходимо иметь нашу спецвалюту - тулпойнт.</p>

        <blockquote>Тулпойнт это абстрактная единица использования (аренды) инструмента вне мастерской.</blockquote>

        <h3>Как это работает?</h3>

        <p>Каждый инструмент имеет свой вес в тулпойнтах.<br>Ты можешь набирать наборы инструментов в пределах своего тулпоинтного счета.</p>

        <p>Для примера: один простой инструмент типа молотка или газового ключа имеет вес в 1 тулпойнт/день. Элекроинструмент может иметь вес в 2 или 3 тулпойнта/день.</p>

        <h3>Почем плюшки?</h3>
      <p>Если ты взял недельный или месячный абонемент, то автоматически получишь на свой счет следующее количество тулпойнтов:</p>

      <ul>
        <li>недельный абонемент - 10 тулпойнтов</li>
        <li>месячный абонемент - 50 тулпойнтов</li>
      </ul>

      <p>Данные тулпойнты действуют пока активен абонемент. По истечении абонемента тулпойнты исчезают.</p>

      <p>При оформлении недельного и месячного абонемента можно удвоить тулпойнтный счет доплатив 2000 тенге.</p>

      <p>Тулпойнты можно купить и без абонемента:

      <ul>
        <li>5000 тенге - 10 тулпойнтов/за раз</li>
        <li>10000 тенге - 50 туллпойнтов/3 месяца</li>
        <li>15000 тенге - 100 туллпойнтов/3 месяца</li>
      </ul>

        <h3>Дополнительно</h3>
        <p>Данная инициатива еще разрабатывается. Инструменты и их вес еще будут определяться. Как и спрос на это предложение.</p>

        <p>Если ты заинтересован в таком сервисе, то обязательно дай нам знать. Также сообщи, какие инструменты тебе бывают нужны, но: "купить их жаба давит".</p>
        
        <p>Лучше всего это делать в телеграм группе сообщества. Ссылка на группу сообщества доступна во вкладке "Главное".</p>
    </div>
    </div>
    `;
  }
}
