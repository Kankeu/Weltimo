<?php

namespace App\Events;

use App\Request;
use App\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class RequestCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * @var Request
     */
    private $request;
    /**
     * @var User
     */
    private $user;
    /**
     * @var User
     */
    private $to;

    /**
     * Create a new event instance.
     *
     * @param Request $request
     * @param User $user
     * @param User $to
     */
    public function __construct(Request $request, User $user, User $to)
    {
        $this->request = $request;
        $this->user = $user;
        $this->to = $to;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('App.User.'.$this->to->id);
    }

    public function broadcastWith()
    {
        return [
            'request' => $this->request,
            'user' => $this->user
        ];
    }
}
