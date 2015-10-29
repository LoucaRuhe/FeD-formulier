var aanKnop = document.querySelector('body > header > nav > img');
var navUl = document.querySelector('body > header > nav > ul');

document.querySelector('body > header > nav > img').addEventListener('click', function() {
  navUl.classList.toggle('actief');
});




var projectKnop = document.querySelector('input[value=project]');
var stageKnop = document.querySelector('input[value=stage]');

var projectFieldset = document.getElementById('project');
var stageFieldset = document.getElementById('stage');

projectKnop.addEventListener('click', function() {
  projectFieldset.classList.add('show');
  stageFieldset.classList.remove('show');
});

stageKnop.addEventListener('click', function() {
  stageFieldset.classList.add('show');
  projectFieldset.classList.remove('show');
});
