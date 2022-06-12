window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml=()=>{
    const headerHtml="<th></th><th>Name</th><th>Address</th><th>city</th><th>State</th><th>zipcode</th><th>phone</th>";
    let innerHtml='${headerhtml}';
    let AddressBookList=createAddressBookJSON();
    for(const AddressBook of AddressBookList){
        innerHtml='${innerHtml}';
        <tr>
        <td>${AddressBook._name}</td>
        <td>${AddressBook._Address}</td>
        <td>${AddressBook._citi}</td>
        <td>${AddressBook._state}</td>
        <td>${AddressBook._zipcode}</td>
        <td>${AddressBook._phone}</td>
        <td>
           <image name="{AddressBook._id}" onclick="remove(this)" src= 
        </td>
        </tr>
    }
}