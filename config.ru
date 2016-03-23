require 'rubygems'
require 'bundler'
Bundler.require

use Rack::CanonicalHost, ENV['CANONICAL_HOST'] if ENV['CANONICAL_HOST']

require 'sprockets'
map '/assets' do
  sprockets = Sprockets::Environment.new
  sprockets.append_path 'assets/stylesheets'
  run sprockets
end

require 'sinatra'
require './application'
run Application
