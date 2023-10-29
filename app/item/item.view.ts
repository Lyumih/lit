namespace $ {
	export const $lit_app_item_type_Item = $mol_data_record( {
		id: $mol_data_string,
		name: $mol_data_string,
		description: $mol_data_string,
		type: $mol_data_string,
		chapter: $mol_data_string,
		link: $mol_data_string,
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

		@$mol_mem
		authors_data_fetch() {
			return this.$.$lit_app_item_data.response_author()
		}

		@$mol_mem
		authors_data() {
			const author_filtered = this.authors_data_fetch().map( author => ( {
				...author,
				books: author.books.map( book => ( {
					...book,
					items: book.items.filter( item => {
						if( this.search() ) {
							return item.description?.toLocaleLowerCase().includes( this.search().toLocaleLowerCase() )
						}
						if( this.type() ) {
							return item.type === this.type()
						}
						return true
					} )
				} ) )
			} ) )

			return author_filtered.filter( author => author.books.filter( books => books.items.length > 0 ).length > 0 )
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
			const count_items = this.get_author( id )?.books.reduce( ( acc, cur ) => acc + cur.items?.length, 0 ) || 0
			return `📖 ${ this.get_author( id )?.books.length || 0 } 🏹 ${ count_items }`
		}

		author_link( id: any ): string {
			return this.get_author( id )?.link || 'no link'
		}

		book_list( id: any ): readonly any[] {
			return this.get_author( id )?.books?.map( book => this.Book( id + '__' + book.id ) ) ?? []
		}

		get_book( id: string ) {
			const [ author_id, book_id ] = id.split( '__' )
			return this.get_author( author_id )?.books?.find( book => book.id === book_id )
		}

		book_name( id: any ): string {
			return this.get_book( id )?.name || 'no name'
		}

		book_stat( id: any ): string {
			return `🏹 ${ this.get_book( id )?.items?.length || 0 }`
		}

		book_link( id: any ): string {
			return this.get_book( id )?.link || 'no link'
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

		item_link( id: any ): string {
			return this.get_item( id )?.link || 'no link'
		}

		item_desc( id: any ) {
			return this.get_item( id )?.description || 'no description'
		}

	}
}
