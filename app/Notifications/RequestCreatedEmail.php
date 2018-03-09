<?php

namespace App\Notifications;

use App\Request;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class RequestCreatedEmail extends Notification
{
    use Queueable;
    /**
     * @var Request
     */
    private $request;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new notification instance.
     *
     * @param Request $request
     * @param User $user
     */
    public function __construct(Request $request, User $user)
    {
        $this->request = $request;
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->greeting('Hello!')
            ->subject('Weltimo: Request')
            ->line('You have received a new request ('.$this->request->offer.') from '.$this->user->name.' '.$this->user->forename.' for '.$this->request->town)
            ->action('See the request', url(config('app.url').'/#/box'))
            ->line('Thank you for using Weltimo!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
