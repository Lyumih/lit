namespace $.$$ {
	export class $lit_app_item_data extends $.$lit_app_item {

		@$mol_mem
		static response_author() {
			return this.$.$lit_app_item_type_Authors( [
				{
					id: 'a_1',
					name: "Пётр Жгулёв",
					description: 'описание автора',
					link: 'https://author.today/u/zhg2005/works',
					books: [
						{
							id: 'b_1_1',
							name: "Real-Rpg. Город гоблинов",
							description: 'описание книги',
							link: 'https://author.today/work/17501',
							series: "Город гоблинов",
							items: [
								{
									id: 'i_1_1_1',
									name: "Владение копьём",
									description: `Владение копьем\nРанг: F.\nУровень: 1/5.\nТип: навык.\nОсобенности:\n— Обучает пользователя владению копьем.\n— Минимально адаптирует организм под выбранный тип оружия.`,
									type: 'skill',
									chapter: '1',
									link: 'https://author.today/reader/17501/622184'
								},
								{
									id: 'i_1_1_2',
									name: "Стрельба из лука",
									description: 'Стрельба из лука\nРанг: F.\nТип: навык.\nУровень: 1/5.\nОписание:\n— Навык стрельбы из лука, взятый у одного из гоблинских племен.\nНасыщение:\n0/10 ОС',
									type: 'skill',
									chapter: '3',
									link: 'https://author.today/reader/17501/622188'
								},
							]
						}, {
							id: 'b_1_2',
							name: "Real-Rpg. Город гоблинов 2",
							description: 'описание книги 2',
							link: 'https://author.today/reader/17501',
							series: "Город гоблинов",
							items: [],
						}
					]
				}, {
					id: 'a_2',
					name: "Джон Голд",
					description: 'описание автора',
					link: 'https://author.today/u/siu_tower_of_god',
					books: [],
				}
			] )
		}
	}
}
