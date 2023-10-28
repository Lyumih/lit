namespace $.$$ {
	export class $lit_app_skill extends $.$lit_app_skill {

		skill_data() {
			return [
				{
					id: '1',
					author: 'Пётр Жгулёв',
					book: 'Real-Rpg. Город гоблинов',
					book_link: 'https://author.today/work/17501',
					chapter: '1',
					chapter_link: 'https://author.today/reader/17501/622184',
					name: 'Владение копьем',
					description: `Владение копьем
					Ранг: F.
					Уровень: 1/5.
					Тип: навык.
					Особенности:
					— Обучает пользователя владению копьем.
					— Минимально адаптирует организм под выбранный тип оружия.`,
				},
				{
					id: '2',
					author: 'Пётр Жгулёв',
					book: 'Real-Rpg. Город гоблинов',
					book_link: 'https://author.today/work/17501',
					chapter: '2',
					chapter_link: 'https://author.today/reader/17501/622184',
					name: 'Стрельба из лука',
					description: `Стрельба из лукаРанг: F.
					Тип: навык.
					Уровень: 1/5.
					Описание:
					— Навык стрельбы из лука, взятый у одного из гоблинских племен.
					Насыщение:
					0/10 ОС`,
				},
			]
		}
		skill_list(): readonly any[] {
			return this.skill_data().map(skill => this.Skill(skill.id))
		}

		get_skill(id: string) {
			return this.skill_data().find(skill => skill.id === id)
		}

		skill_name( id: any ): string {
			return this.get_skill(id)?.name || 'no name'
		}

		skill_desc( id: any ): string {
			return this.get_skill(id)?.description || 'no description'
		}

	}
}
