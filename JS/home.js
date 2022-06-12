/*uc3 tabular format*/
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

const headerHtml =
    `<tr>
    <th>Name</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>ZipCode</th>
    <th>PhoneNumber</th>
    <th>Actions</th>
    </tr>`;

const innerHtml = `${headerHtml}
<tr>
<td>Kalyani Rathod</td>
<td>gandhi nagar</td>
<td>nagpur</td>
<td> Maharashtra</td>
<td>403 221</td>
<td>91 9563245286</td>
<td>
<img onclick="remove(this)" alt="delete"src="../Assets/delete-black-18dp.svg">
<img onclick="update(this)" alt="edit" src="../Assets/create-black-18dp.svg"  >
</td>
</tr>
<tr>
<td>Swati Badole</td>
<td>rah nagar</td>
<td>solapur</td>
<td> Maharastra</td>
<td>231 557</td>
<td>91 9564526252</td>
<td>
<img onclick="remove(this)" alt="delete"src="../Assets/delete-black-18dp.svg">
<img onclick="update(this)" alt="edit" src="../Assets/create-black-18dp.svg"  >
</td>
<tr>
    
<td>Ayansh Jadhao</td>
<td>bardi</td>
<td>Nagpur</td>
<td> Maharashtra</td>
<td>212 452</td>
<td>91 7769845206</td>
<td>
    <img onclick="remove(this)" alt="delete"src="../Assets/delete-black-18dp.svg">
    <img onclick="update(this)" alt="edit" src="../Assets/create-black-18dp.svg"  >
    </td>
</tr>
        </td>
    </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}
