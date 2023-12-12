// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-myprofile',
//   templateUrl: './myprofile.component.html',
//   styleUrls: ['./myprofile.component.css']
// })
// export class MyprofileComponent {
//   isEditing = false;
//   showAvatarUpload = false;

//   userData = {
//     username: 'YourUsername',
//     email: 'you@example.com',
//     bio: 'Tell us about yourself'
//   };

//   enableEdit() {
//     // Enable editing of form fields
//     this.isEditing = true;
//   }

//   toggleAvatarUpload() {
//     // Toggle the visibility of the avatar upload form
//     this.showAvatarUpload = !this.showAvatarUpload;
//   }

//   onFileSelected(event: any) {
//     // TODO: Implement logic to handle file upload and update the avatar
//     const file = event.target.files[0];
//     if (file) {
//       // You can perform further actions, such as uploading the file to a server
//       // and updating the user's avatar image.
//       alert(`File ${file.name} selected. Implement logic to handle this file.`);
//     }
//   }

//   saveChanges() {
//     // TODO: Implement logic to save changes to the server
//     // For demonstration purposes, we'll log the updated user data to the console
//     console.log('Updated User Data:', this.userData);

//     // Disable editing mode after saving changes
//     this.isEditing = false;
//   }
// }


// myprofile.component.ts
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
 
  userFields = [
    { key: 'name', label: 'Name' },
    { key: 'username', label: 'Username' },
    { key: 'dob', label: 'Date of Birth' },
    { key: 'gender', label: 'Gender' },
    { key: 'description', label: 'Description' }
  ];
  originalUser = {
    name: 'pavan',
    username: 'Pavan123',
    dob: '11/02/2003',
    gender: 'male',
    description: 'How are you'
  };
 
  user: any = { ...this.originalUser };
  isEditMode = false;
  isUsernameEditable = true;
  isEmailEditable = true;
 
  constructor(private userService: UserService) {}
 
  enterEditMode() {
    this.isEditMode = true;
  }
 
  saveChanges() {
    if (this.isEditMode) {
      if (this.user._id) {
        this.userService.updateUser(this.user._id, this.user).subscribe(
          (updatedUser) => {
            console.log('Changes saved:', updatedUser);
            this.originalUser = { ...this.user };
            this.isEditMode = false;
          },
          (error) => {
            console.error('Error saving changes:', error);
          }
        );
      } else {
        this.userService.addUser(this.user).subscribe(
          (newUser) => {
            console.log('User Updated:', newUser);
            alert('User Updated sucessfully');
            this.originalUser = { ...this.user };
            this.isEditMode = false;
          },
          (error) => {
            console.error('Error adding user:', error);
          }
        );
      }
    }
  }
 
  cancelEdit() {
    this.user = { ...this.originalUser };
    this.isEditMode = false;
  }
 
  deleteUserField(field: string) {
    const confirmDelete = window.confirm(`Are you sure you want to delete the ${field}?`);
    if (confirmDelete) {
      this.user[field.toLowerCase()] = '';
    }
  }

}