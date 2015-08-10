'use strict';

/**
 * @ngdoc directive
 * @name focusApp.directive:watch
 * @description
 * # watch
 */
angular.module('focusApp')
  .directive('clock', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {

        var container = d3.select(element[0]),
          width = parseInt(container.style('width')),
          height = parseInt(container.style('height')),
          color = d3.scale.category10(),
          radius = Math.min(width, height) / 2,
          arc = d3.svg.arc()
            .outerRadius(radius)
            .innerRadius(radius - 5);

          var svg = container.append('svg')
            .style('width', width)
            .style('height', height)
            .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

        function timeToAngle(time) {
          return 1/2 * (60 * time.hours() + time.minutes());
        }

        function degreesToRadians(degrees) {
          return degrees * (Math.PI/180);
        }

        scope.$watchCollection('tasks', function() {
          render();
        });

        function render() {
          var task = svg.selectAll('.task').data(scope.tasks);

          task.enter()
            .append('g').attr('class', 'task')
            .append('path').attr('class', 'wedge')
            .attr('d', function(task) {
              var wedge = {
                startAngle: timeToAngle(task.startAt),
                endAngle: timeToAngle(task.startAt.clone().add(task.duration, 'm'))
              };

              wedge.startAngle = degreesToRadians(wedge.startAngle);
              wedge.endAngle = degreesToRadians(wedge.endAngle);

              return arc(wedge);
          })
          .attr('fill', function(d, index) {return color(index);});

          task.exit().remove();
        }

      }
    };
  });
