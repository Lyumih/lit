namespace $.$$ {
	export class $lit_app_skill extends $.$lit_app_skill {

		skill_data() {
			return [
				{
					id: '1',
					author: 'Пётр Жгулёв',
					author_link: 'https://author.today/u/zhg2005/works',
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
					author_link: 'https://author.today/u/zhg2005/works',
					book: 'Real-Rpg. Город гоблинов',
					book_link: 'https://author.today/work/17501',
					chapter: '2',
					chapter_link: 'https://author.today/reader/17501/622188',
					name: 'Стрельба из лука',
					description: `Стрельба из лука
Ранг: F.
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
			const filtered_skills = this.skill_data().filter(skill => this.search()? skill.description.toLowerCase().includes(this.search().toLowerCase()) : true)
			console.log(filtered_skills, this.search())
			return filtered_skills.map(skill => this.Skill(skill.id))
		}

		get_skill(id: string) {
			return this.skill_data().find(skill => skill.id === id)
		}

		skill_name( id: any ): string {
			return "# " +this.get_skill(id)?.name || 'no name'
		}

		skill_desc( id: any ): string {
			return this.get_skill(id)?.description || 'no description'
		}

		skill_author( id: any ): string {
			return this.get_skill(id)?.author || 'no author'
		}

		skill_author_link( id: any ): string {
			return this.get_skill(id)?.author_link || 'no author link'
		}

		skill_book( id: any ): string {
			return `${this.get_skill(id)?.book}. Глава ${this.get_skill(id)?.chapter}` || 'no book'
		}

		skill_book_link( id: any ): string {
			return this.get_skill(id)?.chapter_link || 'no book link'
		}

	}
}
