
# title 1 type H1


## title 2 type H2



### title 3 type H3

It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)


*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_


* Item 1
* Item 2
  * Item 2a
  * Item 2b


As Kanye West said:

> We're living the future so
> the present is our past.


**JAVASCRIPT EXAMPLE**

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

**RUBY EXAMPLE**
```ruby
require "spec/spec_helper"

path, factory_class = ARGV

factory = eval(factory_class).new

ser = Thrift::Serializer.new(factory)

File.open(path, "w") do |file|
  file.write(ser.serialize(Fixtures::COMPACT_PROTOCOL_TEST_STRUCT))
end
```

**GIT EXAMPLE**

```
git status
git add
git commit
```

**PHP EXAMPLE**
```php
/*
 * bruteforce prevention options
 */
define('BRUTEFORCE_FILE', __DIR__ . '/_pafm_bruteforce');
define('BRUTEFORCE_ATTEMPTS', 5);
/**
 * Attempt limit lockout time
 *
 * @var int unit: Seconds
 */
define('BRUTEFORCE_TIME_LOCK', 15 * 60);
define('AUTHORIZE', (!$avoid_authrz ? true : false));
```

**GHERKIN EXAMPLE**

```ruby
Feature: WordPress example
  WordPress should be as easy to test as Rails

  Background:
    Given WordPress is installed

  Scenario: Submitting a post
    Given I am logged in as "admin"
    And I am on admin dashboard
    When I follow "Add New" within "#menu-posts"
    Then I should see "Add New Post"
    When I fill in "title" with "hullo thar"
    And I fill in "content" with "We all love WordPress."
    And I press "publish"
    Then there should be 1 post
    Given I am on homepage
    Then I should see "hullo thar"
    And I should see "We all love WordPress."
```




1. First list item
    - First nested list item
    - Second nested list item

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request



First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida convallis justo et sagittis. Donec mi nisi, consectetur at pulvinar non, condimentum sed nisl. In sit amet dolor mattis, commodo nibh quis, varius libero. Etiam sed vestibulum nisi. Vestibulum suscipit dui sed nulla sollicitudin, sed mollis mauris pellentesque. Sed pellentesque ipsum et elit rutrum dictum. Fusce sed odio libero. Aenean nulla massa, efficitur vitae ipsum eget, ultricies efficitur metus. Etiam sodales vestibulum eros, id commodo tortor egestas facilisis. Duis turpis est, scelerisque ac augue et, tincidunt aliquet nulla. Morbi laoreet est ac dui semper, at rhoncus elit mollis. Nam a mauris eget ligula bibendum placerat. Sed blandit suscipit porttitor.

Duis et ornare sapien, quis malesuada arcu. Sed porta enim vel arcu luctus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sollicitudin ex quis ex tincidunt eleifend. Fusce sodales mauris metus. Mauris ut mi convallis, auctor libero at, varius velit. Etiam risus sem, egestas convallis sapien a, gravida dictum libero. In aliquam aliquet sodales. Integer sed velit fringilla, fringilla est nec, iaculis neque. Fusce elementum sem et mi accumsan condimentum.

Nullam mollis finibus auctor. Suspendisse consequat sem tortor, at molestie lacus rhoncus a. Aliquam ac volutpat sapien, ut gravida dolor. Aenean tincidunt placerat varius. Aenean eget aliquam tellus. Quisque volutpat gravida elit, nec rhoncus leo venenatis a. In hac habitasse platea dictumst. Mauris porta turpis sapien, vel rutrum nisl malesuada interdum. Vivamus finibus ac elit a ultricies. Aenean mi nisi, tincidunt et lacinia ut, semper in est. Quisque ac elit non ex malesuada tempor nec eget tellus. Cras aliquet nisi a justo auctor malesuada. Donec sit amet turpis et risus mollis iaculis ut ac enim. Curabitur malesuada neque ligula, et molestie mi sollicitudin et. Fusce dapibus neque sit amet pretium ullamcorper. Nam id dui fringilla urna molestie mollis.

Donec ullamcorper metus nec nulla interdum porta. Mauris auctor massa a purus vehicula consequat. Integer placerat arcu sit amet posuere lobortis. Nunc augue ligula, rutrum quis tincidunt et, tincidunt sed risus. Etiam eu est non lacus varius condimentum. Proin semper nisi id sem egestas, id pulvinar lacus elementum. Curabitur placerat, dui nec vulputate volutpat, dui mauris vestibulum ante, sed fermentum massa mi sit amet dui. Praesent erat diam, rhoncus sit amet pretium nec, convallis ac enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur semper felis in tempus interdum. Sed sed ullamcorper orci, ac eleifend tellus. Vestibulum eu erat venenatis, varius ligula condimentum, feugiat sapien. Aliquam viverra mi ut est auctor, et malesuada sem fermentum.

Maecenas et tempor metus. Ut in nulla eget diam facilisis varius at a tortor. Morbi ullamcorper, est ac luctus tincidunt, risus libero scelerisque ligula, vel placerat lectus libero quis leo. Etiam tristique magna sed eros aliquam commodo. Nulla vel neque et dolor pretium pellentesque sit amet ac enim. Aliquam tempor quam et lorem iaculis, in tempus diam maximus. Nulla consectetur euismod sagittis. In hac habitasse platea dictumst. Duis dui nisi, blandit sed dapibus efficitur, fermentum et arcu. Suspendisse cursus felis at quam pharetra, in pharetra neque semper. Nam in placerat justo, nec auctor turpis. Cras quis metus eget sem rhoncus rhoncus. Sed molestie eleifend eros, sit amet hendrerit libero aliquet sed.# Example of readme
This is our text.

This is another paragraph.

We can use Markdown for figures and images

Markdown for lists

* One
* Two
    * Nested one
* Three
    1. Numerated list
    2. No need to specify number

We can even inline math: $y = ax + b$.  
How about displayed equations:

$$
y = -2.2x + 0.5
$$

## Subsection
Just use Markdown to define sections and structure of the document.

Let's finish with a footnote.[^4]

[^4]: I'm a footnote!

