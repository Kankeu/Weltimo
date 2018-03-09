<?php

namespace App\Notifications;

use App\Discussionstate;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NextStepEmail extends Notification
{
    use Queueable;
    /**
     * @var Discussionstate
     */
    private $discussionstate;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new notification instance.
     *
     * @param Discussionstate $discussionstate
     * @param User $user
     */
    public function __construct(Discussionstate $discussionstate, User $user)
    {
        $this->discussionstate = $discussionstate;
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
            ->subject('Weltimo: Discussion')
            ->line('You have received a new proposition to pass to the next step of discussion from '.$this->user->name.' '.$this->user->forename)
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
