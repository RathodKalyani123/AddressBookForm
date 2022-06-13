window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });

const createInnerHtml = () => {

const headerHtml =
       `<th>Name</th>
        <th>Address</th>
        <th>city</th>
        <th>State</th>
        <th>zipcode</th>
        <th>phoneNumber</th>
        <th>Actions</th>`;

let innerHtml = `${headerHtml}`;
let contactList = createContactJSON();

for(const Contact of contactList){
innerHtml = `${innerHtml}
      <tr>
       
        <td>${Contact._name}</td>
        <td>${Contact._Address}</td>
        <td>${Contact._city}</td>
        <td>${Contact._State}</td>
        <td>${Contact._zipcode}</td>
        <td>${Contact._phoneNumber}</td>
        
        <td>
        <img src="../assets/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="../assets/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>`;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}

const createContactJSON = () => {
    let contactListLocal = [
      {
        _name: 'Kalyani Rathod',
        _Address: 'pusad',
        _city:'pune',
        _State:'maharastra',
        _zipcode:455252,
        _phoneNumber:919595656545
         },
         {
            _name: 'Nayan Rathod',
            _Address: 'digras',
            _city:'nagpur',
            _State:'maharastra',
            _zipcode:455254,
            _phoneNumber:919564756545
             },
             {
                _name: 'Pavan Rathod',
                _Address: 'ShivajiPark',
                _city:'jalna',
                _State:'maharastra',
                _zipcode:451234,
                _phoneNumber:919875565654
                 },
        
    ];
    return contactListLocal;
  }
  