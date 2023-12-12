import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup<any>;
 
  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {}
 
  ngOnInit(): void {
    this.initForm();
  }
 
  initForm(): void {
    this.feedbackForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      rating: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) {
    return this.feedbackForm.get(field)!.invalid && this.feedbackForm.get(field)!.touched;
  }
 
  isFieldTouched(field: string) {
    return this.feedbackForm.get(field)!.touched;
  }
 
  onSubmit(): void {
    if (this.feedbackForm.valid) {
      const formData = this.feedbackForm.value;
 
      this.feedbackService.submitFeedback(formData)
        .subscribe(
          (response) => {
            console.log('Feedback submitted successfully:', response)
            alert('Feedback submitted successfully:');
            
          },
          (error) => {
            console.error('Error submitting feedback:', error);
           
          }
        );
    } else {
      this.feedbackForm.markAllAsTouched();
    }
  }
}
 
