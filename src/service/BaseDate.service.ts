/**
* 日期处理公共类
*
* @export
* @class BaseDate
*/
export class BaseDate {
    /**
     * 获取当前日期:yyyy-mm-dd
     *
     * @returns{string}
     * @member of BaseDate
     */
    public static getDateNow():string {
        let dateNow= new Date();
        let year:number= dateNow.getFullYear();
        let month:string| number=dateNow.getMonth()+1;
        let day:string| number=dateNow.getDate();
        //return new Date(year, month, day);
        if (month<10) {
            month="0"+month;
        }
        if (day<10) {
            day="0"+day;
        }
        return year+ "-"+month+"-"+day;
    }
}
   