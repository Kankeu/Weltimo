<?php

namespace App\Events;

use App\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class CommentCreatedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private $comment;
    /**
     * @var int
     */
    private $articleOwnerId;

    /**
     * Create a new event instance.
     *
     * @param string $comment
     * @param int $articleOwnerId
     * @internal param int $articleOwner
     * @internal param int $commentOwner
     */
    public function __construct(string $comment, int $articleOwnerId)
    {
        $this->comment = json_decode($comment);
        $this->articleOwnerId = $articleOwnerId;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        $channels = [];
        array_push($channels, new PrivateChannel('comment.articleOwner.' . $this->articleOwnerId));
       if(isset($this->comment->comment_id) && !is_null($this->comment->comment_id)){
            array_push($channels, new PrivateChannel('comment.commentOwner.' . $this->comment->comment_id));
        }
        return $channels;
    }

    public function broadcastWith()
    {
        return [
            'comment' => $this->comment,
        ];
    }
}
