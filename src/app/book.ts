export class book{
    bookId:string;
    bookTitle:string;
    bookAuthors:Array<any>;
    bookPublisher:string;
    bookPublishedDate:string;
    bookDescription:string;
    bookCategory:string;
    bookImage:any;
    bookPrice:string;
    bookLanguage:string;
    bookCurrencytCode:string;
    username:string;
    textSnippet:string;
    preview:string;
    constructor(){
        this.bookId='';
        this.bookTitle='';
        this.bookAuthors=[];
        this.bookPublisher='';
        this.bookPublishedDate='';
        this.bookDescription='';
        this.bookCategory='';
        this.bookImage='';
        this.bookPrice='';
        this.bookLanguage='';
        this.bookCurrencytCode='';
        this.username='';
        this.textSnippet='';
        this.preview='';
    }
    
}