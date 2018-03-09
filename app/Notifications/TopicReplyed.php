<?php

namespace App\Notifications;

use App\Topic;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class TopicReplyed extends Notification implements ShouldQueue
{
    use Queueable;
    /**
     * @var User
     */
    private $user;
    /**
     * @var string
     */
    private $title;
    /**
     * @var Topic
     */
    private $topic;
    /**
     * @var int
     */
    private $topicresponse_id;

    /**
     * Create a new notification instance.
     *
     * @param User $user
     * @param Topic $topic
     * @param int $topicresponse_id
     */
    private $owner;

    /**
     * @param string $owner
     */
    public function __construct(User $user, Topic $topic, int $topicresponse_id, string $owner)
    {
        $this->user = $user;
        $this->topic = $topic;
        $this->topicresponse_id = $topicresponse_id;
        $this->owner = $owner;
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
                    ->greeting('Hello '.$this->topic->user->forename.'!')
                    ->subject('Weltimo: Forum')
                    ->line('You have received a new response from '.$this->user->name.' '.$this->user->forename.' for '.$this->owner.' topic: '.$this->topic->title)
                    ->action('See the response', url(config('app.url').'/#/forum/topic/'.$this->topic->id.'/response/'.$this->topicresponse_id))
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
