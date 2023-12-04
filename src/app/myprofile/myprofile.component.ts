import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  isEditing = false;
  showAvatarUpload = false;

  userData = {
    username: 'YourUsername',
    email: 'you@example.com',
    bio: 'Tell us about yourself'
  };

  enableEdit() {
    // Enable editing of form fields
    this.isEditing = true;
  }

  toggleAvatarUpload() {
    // Toggle the visibility of the avatar upload form
    this.showAvatarUpload = !this.showAvatarUpload;
  }

  onFileSelected(event: any) {
    // TODO: Implement logic to handle file upload and update the avatar
    const file = event.target.files[0];
    if (file) {
      // You can perform further actions, such as uploading the file to a server
      // and updating the user's avatar image.
      alert(`File ${file.name} selected. Implement logic to handle this file.`);
    }
  }

  saveChanges() {
    // TODO: Implement logic to save changes to the server
    // For demonstration purposes, we'll log the updated user data to the console
    console.log('Updated User Data:', this.userData);

    // Disable editing mode after saving changes
    this.isEditing = false;
  }
}
