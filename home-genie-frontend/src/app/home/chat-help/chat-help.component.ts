import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chat-help',
  templateUrl: './chat-help.component.html',
  styleUrls: ['./chat-help.component.css']
})
export class ChatHelpComponent {
  output: string = '';
  serviceNeed: string = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    const prompt = `Provide steps to fix your tap:

            1. Turn off the water supply to the tap.
            2. Use a wrench to loosen the tap handle.
            3. Remove the tap handle and any surrounding parts.
            4. Inspect the tap washer for damage and replace if necessary.
            5. Reassemble the tap handle and parts.
            6. Turn the water supply back on and check for leaks.

            If the issue persists or if you need help with a major problem, please visit our website to book an appointment with our experts.`;

    this.http.post<any>('wss://backend.buildpicoapps.com/ask_ai_streaming_v2', { appId: 'marriage-yes', prompt: prompt })
      .subscribe(
        (response:any) => {
          console.log(response);
          this.output += response.data;
        },
        (error:any) => {
          console.error('An error occurred:', error);
          alert("Oops, we ran into an error. Refresh the page and try again.");
        }
      );

    // To ensure we clear out the output before every new request.
    this.output = '';
  }
}
