<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Intervention\Image\ImageManager;

class ResizeImage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var string
     */
    private $file;
    /**
     * @var array
     */
    private $formats;

    public function __construct(string $file, array $formats)
    {
        $this->file = $file;
        $this->formats = $formats;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $manager = new ImageManager(['driver' => 'gd']);
        foreach ($this->formats as $format){
            $manager->make($this->file)
                ->resize($format['w'], $format['h'])
                ->save($this->file);
        }
    }
}
