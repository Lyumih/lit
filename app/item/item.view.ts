namespace $ {
	export const $lit_app_item_type_Item = $mol_data_record( {
		id: $mol_data_string,
		name: $mol_data_string,
		description: $mol_data_string,
		type: $mol_data_string,
		chapter: $mol_data_string,
		chapter_link: $mol_data_string,
	} )
	export const $lit_app_item_type_Book = $mol_data_record( {
		id: $mol_data_string,
		name: $mol_data_string,
		description: $mol_data_string,
		link: $mol_data_string,
		series: $mol_data_string,
		items: $mol_data_array( $lit_app_item_type_Item ),
	} )
	export const $lit_app_item_type_Author = $mol_data_record( {
		id: $mol_data_string,
		name: $mol_data_string,
		description: $mol_data_string,
		link: $mol_data_string,
		books: $mol_data_array( $lit_app_item_type_Book ),
	} )
	export const $lit_app_item_type_Authors = $mol_data_array( $lit_app_item_type_Author )
}

namespace $.$$ {
	export class $lit_app_item extends $.$lit_app_item {

		authors_data() {
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
							link: 'https://author.today/reader/17501',
							series: "Город гоблинов",
							items: [
								{
									id: 'i_1_1_1',
									name: "Владение копьём",
									description: `Владение копьем\nРанг: F.\nУровень: 1/5.\nТип: навык.\nОсобенности:\n— Обучает пользователя владению копьем.\n— Минимально адаптирует организм под выбранный тип оружия.`,
									type: 'skill',
									chapter: '1',
									chapter_link: 'https://author.today/reader/17501/622184'
								},
								{
									id: 'i_1_1_2',
									name: "Стрельба из лука",
									description: 'Стрельба из лука\nРанг: F.\nТип: навык.\nУровень: 1/5.\nОписание:\n— Навык стрельбы из лука, взятый у одного из гоблинских племен.\nНасыщение:\n0/10 ОС',
									type: 'skill',
									chapter: '3',
									chapter_link: 'https://author.today/reader/17501/622188'
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


		author_list(): readonly any[] {
			return this.authors_data().map( author => this.Author( author.id ) )
		}

		get_author( id: string ) {
			return this.authors_data().find( author => author.id === id ) ?? undefined
		}

		author_name( id: any ): string {
			return this.get_author( id )?.name || 'no name'
		}

		author_stat( id: any ): string {
			const count_items = this.get_author( id )?.books.reduce( ( acc, cur ) => acc + cur.items.length, 0 ) || 0
			return `📖 ${ this.get_author( id )?.books.length || 0 } 🏹 ${ count_items }`
		}

		book_list( id: any ): readonly any[] {
			console.log( 'book_list', id )
			return this.get_author( id )?.books?.map( book => this.Book( id + '__' + book.id ) ) ?? []
		}

		get_book( id: string ) {
			const [ author_id, book_id ] = id.split( '__' )
			console.log( 'book', id, author_id, book_id )
			return this.get_author( author_id )?.books?.find( book => book.id === book_id )
		}

		book_name( id: any ): string {
			console.log( 'book_name', id )

			return this.get_book( id )?.name || 'no name'
		}

		book_stat( id: any ): string {
			return `🏹 ${ this.get_book( id )?.items.length || 0 }`
		}

		items_list( id: any ): readonly any[] {
			return this.get_book( id )?.items?.map( item => this.Item( id + '__' + item.id ) ) ?? []
		}

		get_item( id: string ) {
			const [ author_id, book_id, item_id ] = id.split( '__' )
			return this.get_book( [ author_id, book_id ].join( '__' ) )?.items?.find( item => item.id === item_id )
		}

		item_name( id: any ): string {
			return this.get_item( id )?.name || 'no name'
		}

		item_stat( id: any ): string {
			return `🪧 ${ this.get_item( id )?.type || 'no type' }`
		}

		item_desc( id: any ) {
			return this.get_item( id )?.description || 'no description'
		}

	}
}
